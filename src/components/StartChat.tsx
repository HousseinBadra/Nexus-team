import ChatService from '../services/chat.service';

export default function StartNewChat() {
  const startConversation = async () => {
    const other = '651c64876e82d22911542860';
    // const chatId = await ChatService.createChatRoom('651db18215be300c97adcafa', other);
    await ChatService.createChatRoom('651db18215be300c97adcafa', other);
  };

  return (
    <div>
      {/* Render a list of users or a search interface to select a user */}
      <button onClick={startConversation}>Start Chat</button>
    </div>
  );
}
