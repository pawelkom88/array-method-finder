import {useState} from 'react';
// import arrayMethods from '../../data/arrayMethods'
import MethodFinder from './MethodFinder';
import AddItems from '../method-types/AddItems';
import RemoveItems from '../method-types/RemoveItems';

import classes from './Main.module.css';

export default function Main() {
  const [method, setMethod] = useState('');
  const [chooseMethod, setChooseMethod] = useState('');

  return (
    <main className={classes.main}>
      <MethodFinder setMethod={setMethod}>
        {method && (
          <div className="container">
            <div className="method-types">
              {method === 'addItems' && <AddItems setChooseMethod={setChooseMethod} />}
              {method === 'removeItems' && <RemoveItems setChooseMethod={setChooseMethod} />}
            </div>
          </div>
        )}
      </MethodFinder>
    </main>
  );
}
