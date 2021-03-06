import PropTypes from 'prop-types';
import './Statistics.css';

function getRandomColor() {
  const color = Math.floor(Math.random() * 16777216).toString(16);
  return '#000000'.slice(0, -color.length) + color;
}

/* 2-ий тип експорту -- іменований */
export function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title !== undefined && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {stats.map(data => (
          <li
            class="item"
            key={data.id}
            style={{
              backgroundColor: getRandomColor(),
              flexBasis: `calc(100% / ${stats.length})`,
            }}
          >
            <span class="label">{data.label}</span>
            <span class="percentage">{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* Statistics.defaultProps = {
  title: "UPLOAD STATS"
} */

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
