import React from 'react';
import "./card.css";

export default function Card({ title, para }) {
  return (
    <div className="cards">
      <div className="card">
        <i id="card_img" className="fa-brands fa-rust"></i>
        <div className='card-title'>{title}</div>
        <p className='card-para'>{para}</p>
      </div>
    </div>
  );
}
