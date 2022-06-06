export default function ReturnString({setChooseMethod}) {
  return (
    <>
      <select onChange={e => setChooseMethod(e.target.value)}>
        <option value="">...</option>

        <option value="join">join all elements of the array into a string</option>
        <option value="toString">return a string representing the array</option>
        <option value="toLocaleString">return a localized string representing the array</option>
      </select>
    </>
  );
}
