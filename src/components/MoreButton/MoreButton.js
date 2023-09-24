import React from 'react';
import './MoreButton.css';

function MoreButton() {
  return (
    <section className="more">
      <button className="more__btn-more" type="button" aria-label="Кнопка 'Еще'">Ещё</button>
    </section>
  )
}

export default MoreButton;