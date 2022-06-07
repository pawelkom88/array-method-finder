import classes from './Spinner.module.css';

export default function Spinner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes['lds-ripple']}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
