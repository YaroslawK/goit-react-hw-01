import css from './FriendListItem.module.css';

function FriendListItem({avatar, name, isOnline}) {
    return <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
      {isOnline? <p className={css.green}>ONLINE{isOnline}</p>: <p className={css.red}>OFFLINE{isOnline}</p>}
</div>
}



export default FriendListItem;