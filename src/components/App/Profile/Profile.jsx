/* eslint-disable no-irregular-whitespace */
import css from './Profile.module.css';

function Profile(props) {
  return <div>
  <div className={css.profileContainer}>
      <img
      className={css.profileImg}
      src={props.image}
      alt="User avatar"
    />
    <p className={css.profileName}>{props.name}</p>
    <p className={css.profileName}>@{props.tag}</p>
    <p className={css.profileName}>{props.location}</p>
  </div>

  <ul className={css.profileList}>
    <li>
      <div className={css.profileItem}>Followers</div>
      <div>{props.stats.followers}</div>
    </li>
    <li>
      <div className={css.profileItem}>Views</div>
      <div className={css.profileItem}>{props.stats.views}</div>
    </li>
    <li>
      <div className={css.profileItem}> Likes</div>
      <div>{props.stats.likes}</div>
    </li>
  </ul>
</div>
}

export default Profile