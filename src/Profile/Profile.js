import user from './user.json';
import './Profile.css';

function Profile() {
  return (
    <div class="profile">
      <div class="description">
        <img class="avatar" src={user.avatar} alt="user avatar" />
        <p class="name">
          <b>{user.name}</b>
        </p>
        <p class="tag">@{user.tag}</p>
        <p class="location">{user.location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">
            <b>{user.stats.followers}</b>
          </span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">
            <b>{user.stats.views}</b>
          </span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">
            <b>{user.stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}

/* 1-ий тип експорту -- по дефолту безпосередньо із файлу */
export default Profile;
