import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';



const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="
      1cb540a1-5770-47cf-b3f2-323aae7a6128"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;