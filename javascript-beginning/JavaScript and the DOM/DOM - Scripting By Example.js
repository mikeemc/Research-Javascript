// Submit for by any means (not just click) and stop default browser behaviour
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// Example - Event listener
const redButton = document.getElementById('redButton');
const blueButton = document.getElementById('blueButton');
const colorSquare = document.getElementById('colorDiv');

redButton.addEventListener('click', (e) => {
  colorSquare.style.backgroundColor = 'red';
});

blueButton.addEventListener('click', (e) => {
  colorSquare.style.backgroundColor = 'blue';
})

// Exercise - HTML then JS
<body>
  <div class="wrapper">
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <form id="registrar">
        <input type="text" name="name" placeholder="Invite Someone">
        <button type="submit" name="submit" value="submit">Submit</button>
      </form>
    </header>

    <div class="main">
      <h2>Invitees</h2>
      <ul id="invitedList"></ul>
    </div>
  </div>
  <script type="text/javascript" src="app.js"></script>
</body>

// JS
const form = document.getElementById('registrar');
const input = form.querySelector('input'); // Finds the input of the form
const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');
const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckbox = document.createElement('input');

// Adding filter
filterLabel.textContent = "Hide those who haven't responded";
filterCheckbox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckbox);
mainDiv.insertBefore(div, ul); // Insert div before the ul

filterCheckbox.addEventListener('change', (e) => {
  const isChecked = e.target.checked; // Boolean, true or false
  const lis = ul.children; // Provides a reference to the collection of all elements children
  if (isChecked) {
    for (let i = 0; i < lis.length; i +=1){
      let li = lis[i];
      if (li.className === 'responded') {
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    }
  } else {
    for (let i = 0; i < lis.length; i +=1){
      let li = lis[i];
      li.style.display = '';
    }
  };
});

function createLI (text) {
  const li = document.createElement('li');
  const span = document.createElement('span'); // Create second label
  span.textContent = text; // Input the text as the value
  li.appendChild(span);// Append span to the li

  const label = document.createElement('label'); // Create label
  label.textContent = 'Confirmed'; // Name label

  const checkbox = document.createElement('input'); // Create second label
  checkbox.type = 'checkbox'; // Make it a checkbox input
  label.appendChild(checkbox); // Checkbox in the label
  li.appendChild(label); // label in the li

  const editButton = document.createElement('button'); // Create button
  editButton.textContent = 'edit'; // Make it a checkbox input
  li.appendChild(editButton); // button in the li

  const removeButton = document.createElement('button'); // Create button
  removeButton.textContent = 'remove'; // Make it a checkbox input
  li.appendChild(removeButton); // button in the li

  return li; // return li to handler - without return statement, JS return undefined by default
};

form.addEventListener('submit', (e) => { // Use submit for forms instead of click
  e.preventDefault(); // Cancels the browsers default submit behaviour (also works for other behaviour)
  const text = input.value; // Text equals what the user puts in the form
  input.value = ''; // Updates the form field to null
  const li = createLI(text);
  ul.appendChild(li); // li in the ul
});

ul.addEventListener('change', (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  if (checked) { // Checked is a boolean
    listItem.className = 'responded'; // Update classname to responded if checked
  } else {
    listItem.className = ''; // Update classname to nothing if unchecked
  };
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode; // remove li from ul - get reference to li from the buttons parentnode property
    const ul = li.parentNode; // traverse the the li parentnode

    if (button.textContent === 'remove') {
      ul.removeChild(li); // Remove child of the ul calling in the li
    } else if (button.textContent === 'edit') {
      const span = li.firstElementChild; // Select the span
      const input = document.createElement('input');

      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if (button.textContent === 'save') {
      const input = li.firstElementChild; // Select the span
      const span = document.createElement('span');

      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'edit';
    }
  }
});

// Exercise - There are three list items in the index.html file. We want to be able to enter a 0, 1 or 2 in the text field to embolden the list item with the corresponding index. Can you figure out what condition to put into the if statement to make this code work?
const laws = document.getElementsByTagName('li');
const indexText = document.getElementById('boldIndex');
const button = document.getElementById('embolden');

button.addEventListener('click', (e) => {
    const index = parseInt(indexText.value, 10);

    for (let i = 0; i < laws.length; i += 1) {
       let law = laws[i];

       // replace 'false' with a correct test condition on the line below
       if (i == index) {
          // if index exists, then what did the user put in and change that only
           law.style.fontWeight = 'bold';
       } else {
           law.style.fontWeight = 'normal';
       }
    }
});

// DOMContentLoaded Event
// This listener waits for the HTML document to fully load before being read
document.addEventListener('DOMContentLoaded', () => {
  // Everything inside the JS file goes here
});
