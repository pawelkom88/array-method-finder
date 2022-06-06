export default function SingleItem({setSingleItem}) {
  return (
    <>
      <p>and </p>
      <select onChange={e => setSingleItem(e.target.value)}>
        <option value="">...</option>
        <option value="includes">check if a certain element exists</option>
        <option value="firstIndex">get the first index of a particular item</option>
        <option value="lastIndex">get the last index of a particular item</option>

        <option value="firstElement">get the first element that satisfies a condition</option>
        <option value="firstIndexCondition">get the first index of an item that satisfies a condition</option>
        <option value="reduceStart">get a value by reducing the Array, start to finish</option>
        <option value="reduceEnd">get a value by reducing the Array, finish to start</option>
      </select>
    </>
  );
}
