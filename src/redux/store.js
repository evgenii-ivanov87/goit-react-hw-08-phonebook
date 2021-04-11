
import { configureStore } from '@reduxjs/toolkit'
import phonebookReduser from './phonebook/phonebook-reducer'



const store = configureStore({reducer: { contacts: phonebookReduser }})


export default store