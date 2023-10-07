import axios from 'axios';

const url = 'http://localhost:3001/chat';

const createChatRoom = async (user1Id: string, user2Id: string) => {
  try {
    const response = await axios.post(`${url}/create`, { user1Id, user2Id });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

const ChatService = {
  createChatRoom,
};

export default ChatService;
