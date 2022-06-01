export function Form() {
  return (
    <section>
      <h2>Form</h2>
      <form>
        <fieldset>
          <legend>Text inputs</legend>

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
        </fieldset>

        <fieldset>
          <legend>Date inputs</legend>

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
        </fieldset>

        <fieldset>
          <legend>File input</legend>

          <label>
            File <input type="file" />
          </label>
        </fieldset>

        <fieldset>
          <legend>Radio buttons</legend>

          <label>
            <input type="radio" name="group" /> Radio button 1
          </label>
          <br />
          <label>
            <input type="radio" name="group" /> Radio button 2
          </label>
          <br />
          <label>
            <input type="radio" name="group" /> Radio button 3
          </label>
          <br />
        </fieldset>

        <fieldset>
          <legend>Checkboxes</legend>

          <label>
            <input type="checkbox" /> Checkbox 1
          </label>
          <br />
          <label>
            <input type="checkbox" /> Checkbox 2
          </label>
          <br />
          <label>
            <input type="checkbox" /> Checkbox 3
          </label>
        </fieldset>

        <fieldset>
          <legend>Select</legend>

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
        </fieldset>

        <fieldset>
          <legend>Other</legend>

          <label>
            Color <input type="color" />
          </label>
          <label>
            Range <input type="range" />
          </label>
        </fieldset>
      </form>
    </section>
  )
}
