export function Dropdown() {
  return (
    <section>
      <h2>Dropdown (without logic)</h2>
      <button aria-haspopup="listbox" aria-expanded="false" aria-controls="dropdown1">
        Trigger
      </button>
      <div role="listbox" id="dropdown1" hidden>
        <strong>Header</strong>
        <a role="option" aria-selected href="#">
          Item 1 (active)
        </a>
        <a role="option" aria-selected="false" href="#">
          Item 2
        </a>
        <a role="option" aria-selected="false" href="#" aria-disabled>
          Item 3 (disabled)
        </a>
        <hr />
        <button role="option" aria-selected="false">
          Item button
        </button>
        <button role="option" aria-selected="false" disabled>
          Item button (disabled)
        </button>
      </div>

      <h2>Open dropdown (without logic)</h2>
      <button aria-haspopup="listbox" aria-expanded="true" aria-controls="dropdown2">
        Trigger
      </button>
      <div role="listbox" id="dropdown2">
        <strong>Header</strong>
        <a role="option" aria-selected href="#">
          Item 1 (active)
        </a>
        <a role="option" aria-selected="false" href="#">
          Item 2
        </a>
        <a role="option" aria-selected="false" href="#" aria-disabled>
          Item 3 (disabled)
        </a>
        <hr />
        <button role="option" aria-selected="false">
          Item button
        </button>
        <button role="option" aria-selected="false" disabled>
          Item button (disabled)
        </button>
      </div>

      <div aria-hidden="true" style={{ height: 235 }} />

      <h2>Nested dropdown (without logic)</h2>
      <button aria-haspopup="listbox" aria-expanded="true" aria-controls="dropdown3">
        Trigger
      </button>
      <div role="listbox" id="dropdown3">
        <button role="option" aria-selected="false">
          Item 1
        </button>
        <button
          role="option"
          aria-selected="false"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-controls="dropdown4"
        >
          Trigger 2
        </button>
        <div role="listbox" id="dropdown4">
          <button role="option" aria-selected="false">
            Item 1
          </button>
          <button role="option" aria-selected="false">
            Item 2
          </button>
          <button
            role="option"
            aria-selected="false"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-controls="dropdown5"
          >
            Trigger 3
          </button>
          <div role="listbox" id="dropdown5">
            <button role="option" aria-selected="false">
              Item 1
            </button>
            <button role="option" aria-selected="false">
              Item 2
            </button>
            <button role="option" aria-selected="false">
              Item 3
            </button>
          </div>
          <button role="option" aria-selected="false">
            Item 3
          </button>
        </div>
        <button role="option" aria-selected="false">
          Item 2
        </button>
        <button role="option" aria-selected="false">
          Item 3
        </button>
      </div>

      <div aria-hidden="true" style={{ height: 147 }} />
    </section>
  )
}
