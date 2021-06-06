import PropTypes from 'prop-types';
import './Friends.css';

/* 3-ий тип експорту -- іменований з перейменуванням */
export function Friends({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li class="item" key={friend.id}>
          <span class="status">статус</span>
          <img class="avatar" src={friend.avatar} alt="" width="48" />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

Friends.propTypes = {
  friends: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
