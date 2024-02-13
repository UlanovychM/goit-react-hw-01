/* eslint-disable react/prop-types */
const FriendsList = ({ friends }) => {
	return (
		<ul>
			{friends.map(({ avatar, name, isOnline, id }) => {
				return (
					<li key={id}>
						<img src={avatar} alt={name} width='48' />
						<p>{name}</p>
						<p>{isOnline ? 'Online' : 'Offline'}</p>
					</li>
				);
			})}
		</ul>
	);
};

export default FriendsList;
