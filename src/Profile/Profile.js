import PropTypes from 'prop-types';
import './Profile.css';

function addCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div class="profile">
      <div class="description">
        <img class="avatar" src={avatar} alt="user avatar" />
        <p class="name">
          <b>{name}</b>
        </p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">
            <b>{addCommas(stats.followers)}</b>
          </span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">
            <b>{addCommas(stats.views)}</b>
          </span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">
            <b>{addCommas(stats.likes)}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

/* 1-ий тип експорту -- по дефолту безпосередньо із файлу */
export default Profile;
