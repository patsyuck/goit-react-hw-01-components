import './App.css';
/* 1-ий тип імпорту -- по дефолту */
import Profile from './Profile/Profile';
/* 2-ий тип імпорту -- іменований */
import { Statistics } from './Statistics/Statistics';
/* 3-ий тип імпорту -- іменований з перейменуванням */
import { Friends as FriendsList } from './Friends/Friends';
/* 4-ий тип імпорту -- через індексний файл */
import { Transactions } from './Transactions';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={statisticalData} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
}

export default App;
