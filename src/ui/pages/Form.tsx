export function Form() {
  return (
    <section>
      <h2>Form</h2>

      <h3>Text inputs</h3>

      <label>
        Text <input type="text" placeholder="Text" />
      </label>

      <label>
        Number <input type="number" placeholder="Number" />
      </label>

      <label>
        Password <input type="password" placeholder="Password" />
      </label>

      <label>
        Email <input type="email" placeholder="Email" />
      </label>

      <label>
        Tel <input type="tel" placeholder="Tel" />
      </label>

      <label>
        Url <input type="url" placeholder="Url" />
      </label>

      <label>
        Search <input type="search" placeholder="Search" />
      </label>

      <label>
        Textarea <textarea placeholder="Textarea"></textarea>
      </label>

      <h3>Date inputs</h3>

      <label>
        Date <input type="date" />
      </label>

      <label>
        Date time <input type="datetime-local" />
      </label>

      <label>
        Time <input type="time" />
      </label>

      <label>
        Month <input type="month" />
      </label>

      <label>
        Week <input type="week" />
      </label>

      <h3>File input</h3>

      <label>
        File <input type="file" />
      </label>

      <h3>Radio buttons</h3>

      <fieldset>
        <legend>Some label</legend>

        <label>
          <input type="radio" name="group" /> Radio button 1
        </label>
        <label>
          <input type="radio" name="group" /> Radio button 2
        </label>
        <label>
          <input type="radio" name="group" /> Radio button 3
        </label>
      </fieldset>

      <h3>Checkboxes</h3>

      <fieldset>
        <legend>Some label</legend>

        <label>
          <input type="checkbox" /> Checkbox 1
        </label>
        <label>
          <input type="checkbox" /> Checkbox 2
        </label>
        <label>
          <input type="checkbox" /> Checkbox 3
        </label>
      </fieldset>

      <h3>Select</h3>

      <label>
        Select
        <select>
          <optgroup label="Group 1">
            <option>Option 1</option>
            <option>Option 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option>Option 3</option>
          </optgroup>
        </select>
      </label>

      <label>
        Select multiple
        <select multiple>
          <optgroup label="Group 1">
            <option>Option 1</option>
            <option>Option 2</option>
          </optgroup>
          <optgroup label="Group 2">
            <option>Option 3</option>
          </optgroup>
        </select>
      </label>

      <label>
        Typeahead (without logic)
        <div role="combobox">
          <span role="option">Option 2</span>
          <span role="option">Option 3</span>
          <input list="datalist" />
          <datalist id="datalist">
            <option>Option 1</option>
            <option>Option 3</option>
          </datalist>
        </div>
      </label>

      <h3>Other</h3>

      <label>
        Color <input type="color" />
      </label>

      <label>
        Range <input type="range" />
      </label>

      <h3>Progress bar</h3>

      <progress value={5} max={10} />
    </section>
  )
}
