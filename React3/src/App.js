import './App.css';
import UserCard from './UserCard';

function App() {
  return (
    <div className="App">
      <h1>Props and PropTypes Assignment</h1>
      <div className="cards-container">
        <UserCard name="Alice Johnson" age={28} />
        <UserCard name="Bob Smith" age={35} />
        <UserCard />
      </div>
    </div>
  );
}

export default App;
