import FriendListItem from "./FriendListItem/FriendListItem";
import friends from '/src/friends';


function FriendList() {
   return <div>
       {friends.map((el) => {
        
        return <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
            key={el.id}/>
})}
        </div>

}

export default FriendList;