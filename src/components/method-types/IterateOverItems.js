export default function IterateOverItems({setChooseMethod}) {
  return (
    <>
      <select onChange={e => setChooseMethod(e.target.value)}>
        <option value="">...</option>
        <option value="forEach">by executing a function I will create for each element</option>
        <option value="map">
          by creating a new array from each element with a function I create
        </option>
        <option value="entries">by creating an iterator object</option>
      </select>
    </>
  );
}
