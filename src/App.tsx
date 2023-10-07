import { useDispatch } from 'react-redux';
import { logIn } from './actions/authentication';

function App() {
  const dispatch = useDispatch();
  dispatch(logIn('badrahsein@gmail.com', 'badrahsein@gmail.com'));
  return <div className="App">Hello</div>;
}

export default App;
