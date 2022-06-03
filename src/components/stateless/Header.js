import classes from "./Header.module.css";

export default function Header() {
  // local storage
  return (
    <header className={classes.header}>
      <h1>
        <span className={classes.bracket}>[ </span>
        Array method finder
        <span className={classes.bracket}> ]</span>
      </h1>
      <p className={classes.paragraph}>
        Quicky find the right tool for the job !
      </p>
    </header>
  );
}
