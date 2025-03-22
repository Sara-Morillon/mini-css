export function Button() {
  return (
    <section>
      <h2>Button</h2>
      <button>Button</button>
      <br />
      <br />
      <button disabled>Disabled button</button>
      <br />
      <br />
      <button aria-busy>Loading button</button>
      <br />
      <br />
      <div role="group">
        <button>Button</button>
        <button>Group</button>
      </div>
    </section>
  )
}
