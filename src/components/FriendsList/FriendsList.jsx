/* eslint-disable react/prop-types */
import css from './FriendsList.module.css';
import FriendsListItem from '../FriendsListItem/FriendsListItem';

const FriendsList = ({ friends }) => {
	return (
		<ul className={css.friendsList}>
			{friends.map(({ avatar, name, isOnline, id }) => (
				<FriendsListItem
					avatar={avatar}
					name={name}
					isOnline={isOnline}
					key={id}
				/>
			))}
		</ul>
	);
};

export default FriendsList;
