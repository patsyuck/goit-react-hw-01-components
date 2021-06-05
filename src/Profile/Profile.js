import user from './user.json';
import './Profile.css';

function Profile() {
  return (
    <div class="profile">
      <div class="description">
        <img class="avatar" src={user.avatar} alt="user avatar" />
        <p class="name">{user.name}</p>
        <p class="tag">@{user.tag}</p>
        <p class="location">{user.location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{user.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{user.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
