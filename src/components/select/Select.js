let options = [];

export default function Select({methodType, data = [], setChooseMethod}) {
  data.forEach(obj => {
    const property = obj[methodType];
    createArrayOfMethodsTypes(property);
  });

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

function createArrayOfMethodsTypes(property) {
  if (property !== undefined) {
    for (const [type, desc] of Object.entries(property)) {
      options.push({type, desc});
    }
  }
}
