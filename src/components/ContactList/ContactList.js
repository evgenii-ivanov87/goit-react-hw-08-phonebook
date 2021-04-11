import { useSelector, useDispatch } from 'react-redux';
import { MdPhoneForwarded } from 'react-icons/md';
import * as phonebookOperations from '../../redux/phonebook/phonebook-operations';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookOperations.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <a className={s.link} href={`tel:+${number}`}>
            <MdPhoneForwarded className={s.icon} />
            <p className={s.text}>
              {name}: +{number}
            </p>
            <span className={s.span}></span>
          </a>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.button}
          >
            <span className={s.times}>&times;</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
