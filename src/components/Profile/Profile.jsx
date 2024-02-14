/* eslint-disable react/prop-types */

import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
	const { followers, views, likes } = stats;

	return (
		<div className={css.profile}>
			<div className={css.description}>
				<img src={image} alt='User avatar' className={css.avatar} />
				<p className={css.profileName}>{name}</p>
				<p className={css.profileTag}>{tag}</p>
				<p className={css.profileLocation}>{location}</p>
			</div>

			<ul className={css.stats}>
				<li className={css.followersList}>
					<span className={css.label}>Followers</span>
					<span className={css.quantity}>{followers}</span>
				</li>
				<li className={css.viewsList}>
					<span className={css.label}>Views</span>
					<span className={css.quantity}>{views}</span>
				</li>
				<li className={css.likesList}>
					<span className={css.label}>Likes</span>
					<span className={css.quantity}>{likes}</span>
				</li>
			</ul>
		</div>
	);
};

export default Profile;
