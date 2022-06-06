export default function Other({setChooseMethod}) {
  return (
    <>
      <select onChange={e => setChooseMethod(e.target.value)}>
        <option value="">...</option>

        <option value="length">let's find the length of the array</option>
        <option value="fill">let's fill all the elements of the array with static value</option>
        <option value="copyWithin">let's copy a sequence of array elements within the array</option>
      </select>
    </>
  );
}
