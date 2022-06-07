import {useState, useEffect} from 'react';
import {getDocs} from 'firebase/firestore';

import {methodsRef} from '../config';

export default function useFetch() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getDocs(methodsRef).then(
      snapshot => {
        if (snapshot.empty) {
          setError('No data found');
          setLoading(false);
        }

        let arrayMethods = [];
        snapshot.docs.forEach(doc => {
          arrayMethods.push({...doc.data(), id: doc.id});
        });
        setData(arrayMethods);
        setLoading(false);
      },
      error => {
        setError(error.message);
        setLoading(false);
      }
    );
  }, []);

  return {data, loading, error};
}
