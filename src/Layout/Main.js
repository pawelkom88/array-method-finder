import {useEffect, useState} from 'react';
import useFetch from '../hooks/useFetch';

import MethodFinder from '../components/MethodFinder';
import MethodDesc from '../components/MethodDesc';
import MethodOutput from '../components/MethodOutput';
import Usage from '../components/Usage';
import Output from '../components/Output';
import AddItems from '../components/method-types/AddItems';
import RemoveItems from '../components/method-types/RemoveItems';
import IterateOverItems from '../components/method-types/IterateOverItems';
import ReturnString from '../components/method-types/ReturnString';
import SortItems from '../components/method-types/SortItems';
import Other from '../components/method-types/Other';
import FindItems from '../components/method-types/FindItems';
import SingleItem from '../components/method-types/SingleItem';
import MultipleItems from '../components/method-types/MultipleItems';
import Spinner from '../components/utilities/Spinner';

export default function Main() {
  const {data, loading, error} = useFetch();
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
      {loading && !error ? (
        <Spinner />
      ) : (
        <>
          <MethodFinder error={error} setMethod={setMethodType}>
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
              {methodType === 'iterateOver' && (
                <IterateOverItems setChooseMethod={setChooseMethod} />
              )}
              {methodType === 'returnString' && <ReturnString setChooseMethod={setChooseMethod} />}
              {methodType === 'sortItems' && <SortItems setChooseMethod={setChooseMethod} />}
              {methodType === 'other' && <Other setChooseMethod={setChooseMethod} />}
            </div>
            <MethodDesc
              data={data}
              chooseMethod={chooseMethod}
              singleItem={singleItem}
              multipleItems={multipleItems}
            />
          </MethodFinder>
          <MethodOutput>
            <>
              <Usage
                data={data}
                chooseMethod={chooseMethod}
                singleItem={singleItem}
                multipleItems={multipleItems}
              />
              <Output
                data={data}
                chooseMethod={chooseMethod}
                singleItem={singleItem}
                multipleItems={multipleItems}
              />
            </>
          </MethodOutput>
        </>
      )}
    </main>
  );
}
