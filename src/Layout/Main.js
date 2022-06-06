import {useEffect, useState} from 'react';

import arrayMethods from '../data/arrayMethods';
import MethodFinder from '../components/MethodFinder';
import MethodDesc from '../components/MethodDesc';
import MethodOutput from '../components/MethodOutput';
import Usage from '../components/Usage';
import Output from '../components/Output';
import AddItems from '../components/method-types/AddItems';
import RemoveItems from '../components/method-types/RemoveItems';
import IterateOverItems from '../components/method-types/IterateOverItems';
import ReturnString from '../components/method-types/ReturnString';
import FindItems from '../components/method-types/FindItems';
import SingleItem from '../components/method-types/SingleItem';
import MultipleItems from '../components/method-types/MultipleItems';

export default function Main() {
  const [methodType, setMethodType] = useState('');
  const [chooseMethod, setChooseMethod] = useState('');
  const [singleItem, setSingleItem] = useState('');
  const [multipleItems, setMultipleItems] = useState('');

  useEffect(() => {
    setChooseMethod('');
  }, [methodType]);

  useEffect(() => {
    if (chooseMethod !== 'findItems') {
      setSingleItem('');
      setMultipleItems('');
    }
  }, [chooseMethod, setSingleItem, setMultipleItems]);
  return (
    <main>
      <MethodFinder setMethod={setMethodType}>
        <div className="method-types">
          {methodType === 'addItems' && <AddItems setChooseMethod={setChooseMethod} />}
          {methodType === 'removeItems' && <RemoveItems setChooseMethod={setChooseMethod} />}
          {methodType === 'findItems' && (
            <FindItems setChooseMethod={setChooseMethod}>
              {chooseMethod === 'singleItem' && <SingleItem setSingleItem={setSingleItem} />}
              {chooseMethod === 'multipleItems' && (
                <MultipleItems setMultipleItems={setMultipleItems} />
              )}
            </FindItems>
          )}
          {methodType === 'iterateOver' && <IterateOverItems setChooseMethod={setChooseMethod} />}
          {methodType === 'returnString' && <ReturnString setChooseMethod={setChooseMethod} />}
        </div>
        <MethodDesc
          data={arrayMethods}
          chooseMethod={chooseMethod}
          singleItem={singleItem}
          multipleItems={multipleItems}
        />
      </MethodFinder>
      <MethodOutput>
        <>
          <Usage
            data={arrayMethods}
            chooseMethod={chooseMethod}
            singleItem={singleItem}
            multipleItems={multipleItems}
          />
          <Output
            data={arrayMethods}
            chooseMethod={chooseMethod}
            singleItem={singleItem}
            multipleItems={multipleItems}
          />
        </>
      </MethodOutput>
    </main>
  );
}
