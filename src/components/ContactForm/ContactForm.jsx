import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './ContactForm.module.css';

export class ContactForm extends Component {
  
  state = {
    name: '',
    number: '',
  }

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({id: uuidv4(), ...this.state});
    this.resetForm();
  }

  resetForm = () => {
    this.setState({ name: '', number: ''})
  }

  render() {
    return (
      <form className={s.ContactForm} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          className={s.ContactInput}
          type="text"
          name="name"
          value={this.state.name}
          id={this.nameInputId}
          onChange={this.handleChange}
          key={this.state.id}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        
        <label htmlFor={this.numberInputId}>Phone number</label>
        <input
          className={s.ContactInput}
          type="tel"
          name="number"
          value={this.state.number}
          id={this.numberInputId}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button className={s.ContactBtn}
          type="submit"
          name="submit">Add Contact</button>
      </form>
      
    )
  }
}