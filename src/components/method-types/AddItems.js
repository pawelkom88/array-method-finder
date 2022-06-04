export default function AddItems({setChooseMethod}) {
  return (
    <>
      <p>then add </p>
      <select onChange={e => setChooseMethod(e.target.value)}>
        <option value="">...</option>
        <option value="add">element/s to an array</option>
        <option value="addEnd">element/s to the end of an array</option>
        <option value="addFront">element/s to the front of an array</option>
        <option value="addOther">this array to other array(s) and/or value(s)</option>
      </select>
    </>
  );
}
