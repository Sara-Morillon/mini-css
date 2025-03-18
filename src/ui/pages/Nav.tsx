import { useLocation } from 'react-router-dom'

export function Nav() {
  const { hash } = useLocation()

  return (
    <section>
      <h2>Navigation</h2>
      <section>
        <h3>Top navigation</h3>
        <article>
          <header>
            <nav>
              <ul>
                <li>
                  <strong>Brand name</strong>
                </li>
                <li>
                  <a href="#" aria-current="page">
                    Menu item 1 (active)
                  </a>
                </li>
                <li>
                  <a href="#">Menu item 2</a>
                </li>
                <li>
                  <a href="#" aria-disabled>
                    Disabled link
                  </a>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <button>Menu button</button>
                </li>
                <li>
                  <button disabled>Disabled button</button>
                </li>
                <li>
                  <button style={{ marginLeft: 'auto' }}>Right button</button>
                </li>
              </ul>
            </nav>
          </header>
        </article>
      </section>
      <section>
        <h3>Side navigation</h3>
        <article>
          <aside>
            <nav>
              <ul>
                <li>
                  <strong>Header</strong>
                </li>
                <li>
                  <a href="#" aria-current="page">
                    Menu item 1 (active)
                  </a>
                </li>
                <li>
                  <a href="#">Menu item 2</a>
                </li>
                <li>
                  <a href="#" aria-disabled>
                    Disabled link
                  </a>
                </li>
                <li>
                  <button>Menu button with long desc</button>
                </li>
                <li>
                  <button disabled>Disabled button</button>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <button>Menu item 4</button>
                </li>
              </ul>
            </nav>
          </aside>
        </article>
      </section>
      <section>
        <h3>Tabs</h3>
        <article>
          <div role="tablist">
            <a role="tab" aria-selected={hash === '#tab1'} href="#tab1">
              Tab 1
            </a>
            <a role="tab" aria-selected={hash === '#tab2'} href="#tab2">
              Tab 2
            </a>
            <a role="tab" aria-selected={hash === '#tab3'} href="#tab3">
              Tab 3
            </a>
            <a role="tab" aria-disabled aria-selected={hash === '#tab3'} href="#tab3">
              Tab 4
            </a>
          </div>
          <div id="tab1" role="tabpanel">
            Tab panel 1
          </div>
          <div id="tab2" role="tabpanel">
            Tab panel 2
          </div>
          <div id="tab3" role="tabpanel">
            Tab panel 3
          </div>
        </article>
      </section>
      <section>
        <h3>Breadcrumb</h3>
        <article>
          <nav aria-label="Breadcrumb">
            <ul>
              <li>
                <a href="#">First item</a>
              </li>
              <li>
                <a href="#">Second item</a>
              </li>
              <li>
                <a href="#">Third item</a>
              </li>
              <li>Current item</li>
            </ul>
          </nav>
        </article>
      </section>
    </section>
  )
}
