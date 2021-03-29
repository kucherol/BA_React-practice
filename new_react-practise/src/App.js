import './App.css';
import Button from './Button';
import Toogler from './Toogler';
import Main from './Post/Main';
import RenderPost from './Post/RenderPost';

function App() {
  return (
    <div className="App">
      <Button />
      <Toogler />
      <Main />
      <RenderPost />
    </div>
  );
}

export default App;
