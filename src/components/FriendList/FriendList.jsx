import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
<div>
<ul className={css.friendList}>
        {friends.map(friend =>
            <li key={friend.id} className={css.item}>
            <span className={friend.isOnline ? css.online : css.ofline}></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
          </li>
)}
</ul>
</div>
    )
}