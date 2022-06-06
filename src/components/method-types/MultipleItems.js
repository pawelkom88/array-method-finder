export default function MultipleItems({setMultipleItems}) {
  return (
    <>
      <select onChange={e => setMultipleItems(e.target.value)}>
        <option value="">...</option>
        <option value="valueCondition">get values based on a condition I create</option>
        <option value="everyItemCondition">
          find whether or not every item satisfies a condition
        </option>
        <option value="atLeastOneItemCondition">
          find whether or not at least one item satisfies a condition
        </option>
      </select>
    </>
  );
}
