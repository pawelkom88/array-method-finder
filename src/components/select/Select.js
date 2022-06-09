let options = [];

export default function Select({methodType, data = [], setChooseMethod}) {
  createArrayOfMethodsTypes(data, methodType);

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

function createArrayOfMethodsTypes(data, methodType) {
  data.forEach(obj => {
    const property = obj[methodType];
    if (property !== undefined && typeof property === "object") {
      for (const [type, desc] of Object.entries(property)) {
        options.push({type, desc});
      }
    }
  });
}
