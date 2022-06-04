import {useState} from 'react';
// import arrayMethods from '../../data/arrayMethods'
import MethodFinder from './MethodFinder';
import AddItems from '../method-types/AddItems';
import RemoveItems from '../method-types/RemoveItems';

import classes from './Main.module.css';

export default function Main() {
  const [methodType, setMethodType] = useState('');
  const [chooseMethod, setChooseMethod] = useState('');

  return (
    <main className={classes.main}>
      <MethodFinder setMethod={setMethodType}>
        {methodType && (
          <div className="container">
            <div className="method-types">
              {methodType === 'addItems' && <AddItems setChooseMethod={setChooseMethod} />}
              {methodType === 'removeItems' && <RemoveItems setChooseMethod={setChooseMethod} />}
            </div>
          </div>
        )}
      </MethodFinder>
    </main>
  );
}
