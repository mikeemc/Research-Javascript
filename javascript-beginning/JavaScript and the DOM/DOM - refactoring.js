// Refactoring

// before
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

// After
function createLI (text) {

  function createElement(elementName, property, value) {
    const element = document.createElement(elementName);
    element[property] = value;
    return element;
  }

  function appendToLi(elementName, property, value) {
    const element = document.createElement(elementName, property, value);
    li.appendChild(element);
    return element;
  }

  const li = document.createElement('li');

  appendToLi('span', 'textContent', text);
  appendToLi('label', 'textContent', 'Confirmed')
    .appendChild(createElement('input', 'type', 'checkbox')); // Checkbox in the label
  appendToLi('button', 'textContent', 'edit');
  appendToLi('button', 'textContent', 'remove');

  return li; // return li to handler - without return statement, JS return undefined by default
};

// Cleaning up event handlers

// Before
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

// After
ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const li = button.parentNode; // remove li from ul - get reference to li from the buttons parentnode property
    const ul = li.parentNode; // traverse the the li parentnode
    const action = button.textContent;
    const nameActions = { // Name Actions object
      remove: () => {
        ul.removeChild(li);
      },
      edit: () => {
        const span = li.firstElementChild; // Select the span
        const input = document.createElement('input');
        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
      },
      save: () => {
        const input = li.firstElementChild; // Select the span
        const span = document.createElement('span');
        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
      }
    };

    // Checks the nameAction property and chooses the action based on the button text
    nameActions[action]();
  }
});
