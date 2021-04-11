import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import  * as phonebookActions from '../../redux/phonebook/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
  
  const values = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));

  return (
    <label className={s.filter}>
      Find contacts by name
      <input
        type="text"
        value={values}
        onChange={onChange}
        placeholder="Enter name to search"
        className={s.input}
      />
    </label>
  );
}