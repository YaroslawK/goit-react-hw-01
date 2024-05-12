import './App.module.css'
import Profile from './Profile/Profile'
import userData from '/src/userData';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory'


function App() {

  return <>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
    />
    <FriendList />
    <TransactionHistory />
     </>
   
}

export default App
