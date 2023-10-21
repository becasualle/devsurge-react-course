import { useState } from 'react';

function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Показать</button>
      )}
    </section>
  );
}

export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Алматы, Казахстан</h2>
      <Panel
        title="Основное"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Алматы, население которого составляет около 2 млн. человек, является
        крупнейшим городом Казахстана. С 1929 по 1997 год он был столицей
        страны.
      </Panel>
      <Panel
        title="Этимология"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Алматы с казахского переводится как «Яблоневый», в то время как Алма-Ата
        — это набор казахских слов, в переводе значащих «яблоко» (алма) и «дед»
        (ата).
      </Panel>
    </>
  );
}
