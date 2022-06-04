import {useState} from 'react';

import arrayMethods from '../../data/arrayMethods';
import MethodFinder from './MethodFinder';
import MethodDesc from './MethodDesc';
import MethodOutput from './MethodOutput';
import Usage from './Usage';
import Output from './Output';
import AddItems from '../method-types/AddItems';
import RemoveItems from '../method-types/RemoveItems';

import classes from './Main.module.css';

export default function Main() {
  const [methodType, setMethodType] = useState('');
  const [chooseMethod, setChooseMethod] = useState('');

  return (
    <main className={classes.main}>
      <MethodFinder setMethodType={setMethodType}>
        {methodType && (
          <div className="container">
            <div className="method-types">
              {methodType === 'addItems' && <AddItems setChooseMethod={setChooseMethod} />}
              {methodType === 'removeItems' && <RemoveItems setChooseMethod={setChooseMethod} />}
            </div>
            {chooseMethod && <MethodDesc data={arrayMethods} chooseMethod={chooseMethod} />}
          </div>
        )}
      </MethodFinder>
      <MethodOutput methodType={methodType} chooseMethod={chooseMethod}>
        {methodType && chooseMethod && (
          <>
            <Usage data={arrayMethods} chooseMethod={chooseMethod} />
            <Output data={arrayMethods} chooseMethod={chooseMethod} />
          </>
        )}
      </MethodOutput>
    </main>
  );
}
