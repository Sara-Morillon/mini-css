export function Loader() {
  return (
    <section>
      <h2>Simple loader</h2>
      <div>
        <span aria-busy />
      </div>
      <h2>Loading button</h2>
      <button aria-busy>Send</button>
      <strong>
        <button aria-busy>Send</button>
      </strong>
      <h2>Loading article</h2>
      <article aria-busy />
      <h2>Loading container</h2>
      <div aria-busy />
      <h2>Loading input</h2>
      <label aria-busy>
        Coucou <input disabled />
      </label>
      <h2>Loading select</h2>
      <label aria-busy>
        Coucou
        <select disabled>
          <option>Option</option>
        </select>
      </label>
      <h2>Loading checkbox</h2>
      <label>
        <input type="checkbox" aria-busy disabled /> Coucou
      </label>
      <h2>Loading radio button</h2>
      <label>
        <input type="radio" aria-busy disabled /> Coucou
      </label>
    </section>
  )
}
