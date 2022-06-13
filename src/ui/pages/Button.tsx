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
      <button data-variant="primary">Primary button</button>
      <br />
      <br />
      <button data-variant="primary" disabled>
        Disabled primary button
      </button>
      <br />
      <br />
      <button data-variant="outlined">Outlined button</button>
      <br />
      <br />
      <button data-variant="outlined" disabled>
        Disabled outlined button
      </button>
      <br />
      <br />
      <article>
        <button>Button in article</button>
        <br />
        <br />
        <button disabled>Disabled button in article</button>
      </article>
    </section>
  )
}
