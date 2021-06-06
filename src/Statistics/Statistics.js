import statisticalData from './statistical-data.json';
import './Statistics.css';

/* 2-ий тип експорту -- іменований */
export function Statistics() {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {statisticalData.map(data => (
          <li class="item" key={data.id}>
            <span class="label">{data.label}</span>
            <span class="percentage">{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
