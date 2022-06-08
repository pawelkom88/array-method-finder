import {firebaseConfig} from "../config";
import {initializeApp} from "firebase/app";
import {useState, useEffect, useRef} from "react";
import {getFirestore, getDocs, collection} from "firebase/firestore";

export default function useFetch(collectionName) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  initializeApp(firebaseConfig);
  const db = getFirestore();

  const methodsRef = collection(db, collectionName);
  const ref = useRef(methodsRef).current;

  useEffect(() => {
    setLoading(true);

    getDocs(ref).then(
      snapshot => {
        if (snapshot.empty) {
          setError("No data found");
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
  }, [ref]);

  return {data, loading, error};
}
