import ChatList from './components/ChatList';
import ChatRoom from './components/ChatRoom';
import StartNewChat from './components/StartChat';

function App() {
  return (
    <>
      <ChatList userId="651db18215be300c97adcafa" />
      <ChatRoom chatId="sampleChatId" userId="651db18215be300c97adcafa" />

      <StartNewChat />
    </>
  );
}

export default App;
