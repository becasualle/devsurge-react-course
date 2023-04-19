import { getPluralForm } from '../utils';

export default function Recipe({ drinkers }) {
  const cup = getPluralForm(drinkers, 'чашку', 'чашки', 'чашек'),
    spicyCup = getPluralForm(0.5 * drinkers, 'чашку', 'чашки', 'чашек'),
    glass = getPluralForm(0.5 * drinkers, 'стакан', 'стакана', 'стаканов');

  return (
    <ol>
      <li>
        Вскипятите {drinkers} {cup} воды.
      </li>
      <li>
        Добавьте {drinkers} {cup} чая и {0.5 * drinkers} {spicyCup} специй.
      </li>
      <li>
        Добавьте {0.5 * drinkers} {glass} молока, доведите до кипения и добавьте
        сахар по вкусу.
      </li>
    </ol>
  );
}
