export function Dropdown() {
  return (
    <section>
      <h2>Dropdown</h2>
      <button aria-haspopup="listbox">Trigger</button>
      <div role="listbox">
        <strong>Header</strong>
        <a role="option" href="#" aria-selected>
          Item 1 (active)
        </a>
        <a role="option" href="#">
          Item 2
        </a>
        <a role="option" href="#" aria-disabled>
          Item 3 (disabled)
        </a>
        <hr />
        <button role="option">Item button</button>
        <button role="option" disabled>
          Item button (disabled)
        </button>
      </div>

      <h2>Nested dropdown</h2>
      <button aria-haspopup="listbox">Trigger</button>
      <div role="listbox">
        <button role="option">Item 1</button>
        <button role="option" aria-haspopup="listbox">
          Trigger 2
        </button>
        <div role="listbox">
          <button role="option">Item 1</button>
          <button role="option">Item 2</button>
          <button role="option" aria-haspopup="listbox">
            Trigger 3
          </button>
          <div role="listbox">
            <button role="option">Item 1</button>
            <button role="option">Item 2</button>
            <button role="option">Item 3</button>
          </div>
          <button role="option">Item 3</button>
        </div>
        <button role="option">Item 2</button>
        <button role="option">Item 3</button>
      </div>
    </section>
  )
}
