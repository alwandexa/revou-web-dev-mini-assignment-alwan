const addItem = (event) => {
    const formData = new FormData(document.getElementById('item-form'))
  
    const table = document.getElementById("item-table").getElementsByTagName('tbody')[0];
  
    let newRow = table.insertRow(0);
  
    let nameCell = newRow.insertCell(0);
    let amountCell = newRow.insertCell(1);
  
    nameCell.innerHTML = formData.get('item-name');
    amountCell.innerHTML = formData.get('item-amount');

    document.getElementById("item-form").reset();

    event.preventDefault();
}

document.getElementById("item-form").onsubmit = addItem
