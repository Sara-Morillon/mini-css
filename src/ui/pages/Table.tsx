export function Table() {
  return (
    <section>
      <h2>Table</h2>
      <table>
        <caption>This is a table</caption>
        <thead>
          <tr>
            <th>Head 1</th>
            <th>Head 2</th>
            <th>Head 3</th>
          </tr>
          <tr>
            <th>
              <input placeholder="Filter1" />
            </th>
            <th>
              <select>
                <option>Filter 2</option>
              </select>
            </th>
            <th>
              <label>
                <input type="checkbox" /> Filter 3
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
          </tr>
          <tr>
            <td>Cell 4</td>
            <td>Cell 5</td>
            <td>Cell 6</td>
          </tr>
          <tr>
            <td>Cell 7</td>
            <td>Cell 8</td>
            <td>Cell 9</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total 1</td>
            <td>Total 2</td>
            <td>Total 3</td>
          </tr>
        </tfoot>
      </table>
    </section>
  )
}
