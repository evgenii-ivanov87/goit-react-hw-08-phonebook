import React, { Component } from 'react';
import Section from './components/Section/Section';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import { connect } from 'react-redux';

class App extends Component {
  
  
  render() {
   
       return (
      <>
        <Section title="Phonebook">
          <Form  />
        </Section>
        <Section title="Contacts">
        {this.props.items.length>2&&<Filter  />}
          <ContactList />
        </Section>
      </>
    );
  }
}
const mapStateToProps= state => {
  return (state.contacts)
}

export default connect(mapStateToProps)(App);