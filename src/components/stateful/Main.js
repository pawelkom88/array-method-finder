import {useState} from 'react';
import MethodFinder from './MethodFinder';

import classes from './Main.module.css';

export default function Main() {
  const [method, setMethod] = useState('');

  return (
    <main className={classes.main}>
      <MethodFinder setMethod={setMethod}>something</MethodFinder>
    </main>
  );
}
