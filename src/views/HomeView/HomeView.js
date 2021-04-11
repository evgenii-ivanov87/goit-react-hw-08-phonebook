import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <>
      <h1 className={s.text}>
       Я помогу тебе хранить все твой контакты!!!
      </h1>
      <img
        src="https://androidinsider.ru/wp-content/uploads/2020/06/book-750x469.jpg"
        alt="book"
        className={s.image}
      />
    </>
  );
}
