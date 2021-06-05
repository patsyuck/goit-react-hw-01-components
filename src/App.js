import './App.css';
/* 1-ий тип імпорту -- по дефолту */
import Profile from './Profile/Profile';
/* 2-ий тип імпорту -- іменований */
import { Statistics } from './Statistics/Statistics';
/* 3-ий тип імпорту -- іменований з перейменуванням */
import { Friends as FriendsList } from './Friends/Friends';
/* 4-ий тип імпорту -- через індексний файл */
import { Transactions } from './Transactions';

function App() {
  return (
    <div className="App">
      <Profile />
      <Statistics />
      <FriendsList />
      <Transactions />
    </div>
  );
}

export default App;
