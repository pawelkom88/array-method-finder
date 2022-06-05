import classes from './MethodOutput.module.css';

export default function MethodOutput({methodType, chooseMethod, children}) {
  return (
    <section className={chooseMethod && methodType ? classes['col-2'] : classes['col-2-hidden']}>
      {children}
    </section>
  );
}
