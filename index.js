const addItem = (event) => {
    const name = document.getElementById("item-name");
    const amount = document.getElementById("item-amount");
  
    const table = document.getElementById("item-table").getElementsByTagName('tbody')[0];
  
    let newRow = table.insertRow(0);
  
    let nameCell = newRow.insertCell(0);
    let amountCell = newRow.insertCell(1);
  
    nameCell.innerHTML = name.value;
    amountCell.innerHTML = amount.value;

    event.preventDefault();
}

document.getElementById("item-form").onsubmit = addItem
