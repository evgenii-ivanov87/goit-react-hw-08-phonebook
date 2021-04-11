import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const styles = {
  activeLink: {
    color: '#ffffff',
    backgroundColor: 'rgb(69, 103, 131)',
    borderColor: 'rgb(52, 78, 99)',
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={s.link}
        activeStyle={styles.activeLink}
      >
       Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={s.link}
        activeStyle={styles.activeLink}
      >
       Войти
      </NavLink>
    </div>
  );
}
