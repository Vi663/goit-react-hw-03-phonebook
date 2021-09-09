import React from 'react';
import s from './ContactList.module.css'

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <li
        className={s.ContactItem}
        key={id}>
        <span className={s.ContactName}>{name} </span>
        <span className={s.ContactListNumber}>{number}</span>
        <button
          type="button"
          className={s.ContactBtn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);