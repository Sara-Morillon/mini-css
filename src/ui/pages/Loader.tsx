export function Loader() {
  return (
    <section>
      <h2>Loading button</h2>
      <strong>
        <button aria-busy>Send</button>
      </strong>
      <h2>Loading container</h2>
      <article aria-busy></article>
      <h2>Loading input</h2>
      <input aria-busy value="Text" />
      <div style={{ display: 'flex' }}>
        <select aria-busy>
          <optgroup label="Group 1">
            <option>Option 1</option>
            <option>Option 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option>Option 3</option>
          </optgroup>
        </select>
        <select>
          <optgroup label="Group 1">
            <option>Option 1</option>
            <option>Option 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option>Option 3</option>
          </optgroup>
        </select>
      </div>
    </section>
  )
}
