import css from './FriendList.module.css';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
    return (
<div>
<ul className={css.friendList}>
        {friends.map(friend =>
<FriendListItem 
avatar={friend.avatar}
name={friend.name}
isOnline={friend.isOnline}
id={friend.id}/>
)}
</ul>
</div>
    )
}