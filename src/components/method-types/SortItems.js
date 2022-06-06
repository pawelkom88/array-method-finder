export default function SortItems({setChooseMethod}) {
  return (
    <>
      <select onChange={e => setChooseMethod(e.target.value)}>
        <option value="">...</option>
        <option value="reverse">by reversing it's order</option>
        <option value="sort"> using 'in place' algorithm and returns the sorted array</option>
      </select>
    </>
  );
}
