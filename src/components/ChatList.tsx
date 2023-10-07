import { Timestamp, collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { firestore } from '../firebase';

interface Chat {
  id: string;
  participants: string[];
  createdAt: Timestamp;
}

export default function ChatList({ userId }: { userId: string }) {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const chatsRef = collection(firestore, 'chats');
    const q = query(chatsRef, where('participants', 'array-contains', userId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const chatsData = snapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as Chat),
      );
      setChats(chatsData);
    });

    return () => unsubscribe();
  }, [userId]);

  return (
    <div>
      {chats.map((chat) => (
        <div key={chat.id}>{/* Display chat room details. Maybe link to ChatRoom component */}</div>
      ))}
    </div>
  );
}
