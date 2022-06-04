export default function RemoveItems({setChooseMethod}) {
  return (
    <>
      <p>then remove </p>
      <select onChange={e => setChooseMethod(e.target.value)}>
        <option value="">...</option>
        <option value="remove">element/s from an array</option>
        <option value="removeLast">the last element of the array</option>
        <option value="removeFirst">the first element of the array</option>
        <option value="removeOther">one or more elements without mutating original array</option>
      </select>
    </>
  );
}
