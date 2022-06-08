import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";

import MethodFinder from "../components/MethodFinder";
import MethodDesc from "../components/MethodDesc";
import MethodOutput from "../components/MethodOutput";
import Usage from "../components/Usage";
import Output from "../components/Output";
import Spinner from "../components/utilities/Spinner";
import Select from "../components/Select";

export default function Main() {
  const {data: methods, loading, error} = useFetch("methods");
  const {data: methodTypes} = useFetch("method-types");
  const [methodType, setMethodType] = useState("");
  const [chooseMethod, setChooseMethod] = useState("");

  useEffect(() => {
    setChooseMethod("");
  }, [methodType]);

  return (
    <main>
      {loading && !error ? (
        <Spinner />
      ) : (
        <>
          <MethodFinder error={error} setMethod={setMethodType}>
            <div className="method-types">
              {methodTypes &&
                methodTypes.map(method => {
                  if (method.hasOwnProperty(methodType)) {
                    return (
                      <Select
                        key={method.id}
                        data={methodTypes}
                        methodType={methodType}
                        setChooseMethod={setChooseMethod}
                      />
                    );
                  }
                  return null;
                })}
            </div>
            <MethodDesc data={methods} chooseMethod={chooseMethod} />
          </MethodFinder>
          <MethodOutput>
            <>
              <Usage data={methods} chooseMethod={chooseMethod} />
              <Output data={methods} chooseMethod={chooseMethod} />
            </>
          </MethodOutput>
        </>
      )}
    </main>
  );
}
