import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Section from '../../components/Section/Section';
import MyForm from '../../components/Form';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <Section>
        <MyForm />
      </Section>
      <Section title="My contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
}
