window.onload = function() {
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];
  
  function addItem(e) {
    e.preventDefault();
    const item = {
      text: this.querySelector('[name=item]').value,
      done: false,
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }
  
  function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
      /*
        Work-around for CodePen template literal bug.
        ref: https://twitter.com/CodePen/status/823550124345331713
      */
      let listItem = `
        <li>
          <input type="checkbox" data-index="${i}" id="item${i}"
            ${plate.done ? 'checked' : ''}
          >
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
      return listItem;
    }).join('');
  }
  
  function toggleDone(e) {
    if (!e.target.matches('input')) return;
    
    const item = e.target;
    const index = item.dataset.index;
    items[index].done = item.checked;
    
    localStorage.setItem('items', JSON.stringify(items));
  }
  
  function checkAll() {
    const checkboxes = itemsList.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = this.checked;
      const index = checkbox.dataset.index;
      items[index].done = checkbox.checked;
    });
    localStorage.setItem('items', JSON.stringify(items));
  }
  
  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  document.getElementById('checkAll').addEventListener('click', checkAll);
  
  populateList(items, itemsList);
}