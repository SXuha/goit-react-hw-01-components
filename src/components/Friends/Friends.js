import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={s.friendList__item} key={id}>
          <div className={isOnline ? s.status__true : s.status__false}></div>

          <img
            className={s.friendList__img}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.friendList__name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
