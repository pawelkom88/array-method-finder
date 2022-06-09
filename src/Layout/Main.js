import {useEffect, useState} from "react";
import useFetch from "../hooks/useFetch";

import MethodFinder from "../components/method-finder/MethodFinder";
import MethodDesc from "../components/MethodDesc";
import MethodOutput from "../components/method-output/MethodOutput";
import Usage from "../components/usage/Usage";
import Output from "../components/output/Output";
import Spinner from "../components/utilities/Spinner";
import Select from "../components/select/Select";

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
