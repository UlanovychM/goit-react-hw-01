/* eslint-disable react/prop-types */
import clsx from 'clsx';
import css from './FriendsListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
	return (
		<li className={clsx(css.friendsListItem)}>
			<img src={avatar} alt={name} width='48' />
			<p className={css.friendsName}>{name}</p>
			<p
				className={clsx(css.friendsStatus, {
					[css.statusOnline]: isOnline,
					[css.statusOffline]: !isOnline,
				})}
			>
				{isOnline ? 'Online' : 'Offline'}
			</p>
		</li>
	);
};

export default FriendsListItem;
