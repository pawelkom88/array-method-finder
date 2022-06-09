import classes from './MethodOutput.module.css';

export default function MethodOutput({children}) {
  return <section className={classes['col-2']}>{children}</section>;
}
