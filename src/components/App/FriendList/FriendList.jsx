import FriendListItem from "./FriendListItem/FriendListItem";



function FriendList({ friends }) {
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