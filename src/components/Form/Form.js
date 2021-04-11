import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import s from './Form.module.css';

export default function MyForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onSubmit = (name, number) =>
    dispatch(phonebookOperations.addContact(name, number));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactMatching = () => {
    const namesInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );

    const numbersInPhonebook = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (
      namesInPhonebook.includes(name) ||
      numbersInPhonebook.includes(number)
    ) {
      alert(`${name}${number} is already in contacts`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter all data');
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setNumber('');

    if (contactMatching()) {
      return;
    }

    onSubmit(name, number);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Ivan Ivanov"
          onChange={e => setName(e.currentTarget.value)}
          className={s.input}
        />
      </label>
      <label>
        Number
        <PhoneInput
          country={'ua'}
          value={number}
          placeholder="067-123-45-67"
          onChange={setNumber}
        />
      </label>
      <div className={s.buttonWrapper}>
        <button type="submit" className={s.button}>
          Добавить контакт
        </button>
      </div>
    </form>
  );
}
