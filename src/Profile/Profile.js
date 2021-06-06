import './Profile.css';

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
            <b>{stats.followers}</b>
          </span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">
            <b>{stats.views}</b>
          </span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">
            <b>{stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}

/* 1-ий тип експорту -- по дефолту безпосередньо із файлу */
export default Profile;
