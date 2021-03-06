import classes from "./MethodFinder.module.css";

export default function MethodFinder({error, setMethod, children}) {
  return (
    <>
      {!error ? (
        <section className={classes["col-1"]}>
          <p>I have an array and I wanna :</p>
          <select onChange={e => setMethod(e.target.value)}>
            <option value="">options</option>
            <option value="addItems">add items or other arrays</option>
            <option value="removeItems">remove items</option>
            <option value="findItems">find items</option>
            <option value="iterateOver">iterate over items</option>
            <option value="returnString">return a string</option>
            <option value="sortItems">sort my array</option>
            <option value="other">something else</option>
          </select>
          {children}
        </section>
      ) : (
        error
      )}
    </>
  );
}
