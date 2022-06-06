export default function FindItems({children, setChooseMethod}) {
  return (
    <div className="container">
      <p>single or multiple ?</p>
      <select onChange={e => setChooseMethod(e.target.value)}>
        <option value="">...</option>
        <option value="singleItem">single item</option>
        <option value="multipleItems">single/multiple items</option>
      </select>
      {children}
    </div>
  );
}
