
import './App.css';
import ToDoMenu from './components/ToDoMenu';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-purple-400 via-pink-200">
      <h1 className='text-violet-900 mb-8btext-5xl pt-12 font-bold'>TO DO APPLICATION</h1>
      <ToDoMenu/>
    </div>
  );
}

export default App;
