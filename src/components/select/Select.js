export default function Select({methodType, data, setChooseMethod}) {
  function createArrayOfMethodsTypes(property) {
    if (property !== undefined) {
      for (const [type, desc] of Object.entries(property)) {
        options.push({type, desc});
      }
    }
  }

  let options = [];

  data.forEach(obj => createArrayOfMethodsTypes(obj[methodType]));

  return (
    <>
      <select onChange={e => setChooseMethod(e.target.value)}>
        <option value="">...</option>
        {options.map((action, i) => {
          return (
            <option key={i} value={action.type}>
              {action.desc}
            </option>
          );
        })}
      </select>
    </>
  );
}
