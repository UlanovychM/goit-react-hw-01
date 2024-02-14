/* eslint-disable react/prop-types */
import clsx from 'clsx';
import css from './FriendsList.module.css';
const FriendsList = ({ friends }) => {
	return (
		<ul className={css.friendsList}>
			{friends.map(({ avatar, name, isOnline, id }) => {
				return (
					<li className={css.friendsListItem} key={id}>
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
			})}
		</ul>
	);
};

export default FriendsList;
