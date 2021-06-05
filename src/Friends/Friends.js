import friends from './friends.json';
import './Friends.css';

/* 3-ий тип експорту -- іменований з перейменуванням */
export function Friends() {
  return (
    <ul class="friend-list">
      <li>Friend 1</li>
      <li>Friend 2</li>
      <li>Friend 3</li>
    </ul>
  );
}
