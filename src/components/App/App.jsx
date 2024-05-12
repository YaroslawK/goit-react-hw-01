import './App.module.css'
import Profile from './Profile/Profile'
import userData from '/src/userData';

function App() {

  return <>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
        </>
   
}

export default App
