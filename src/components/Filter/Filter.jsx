import React from 'react';
import s from './Filter.module.css'

export const Filter = ({ value, onChange }) => (
  <label className={s.FilterLabel}>
    Find contacts by name
    <input className={s.FilterInput} type="text" value={value} onChange={onChange} />
  </label>
);

