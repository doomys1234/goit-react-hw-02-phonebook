import React from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.scss';

export default function Contacts({ contacts, onClick }) {
  return (
    <ul className={s.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          {name}:<span className={s.span}>{number}</span>
          <button
            type="button"
            className={s.button}
            onClick={() => onClick(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
