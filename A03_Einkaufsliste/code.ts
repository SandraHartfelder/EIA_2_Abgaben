document.getElementById('addRowButton').addEventListener('click', function() {
    let table = document.getElementById("myTable");
    let newRow = table.insertRow(table.rows.length); 

    for (let i = 0; i < 7; i++) { 
        let cell = newRow.insertCell(i); 
        cell.contentEditable = true; 

        if (i < 4) { 
            cell.textContent = "Neuer Eintrag"; 
        } else if (i === 4 || i === 5) { 
            let checkbox = document.createElement('input'); 
            checkbox.type = "checkbox"; 
            cell.innerHTML = ''; 
            cell.appendChild(checkbox); 
        }

        if (i === 6) { 
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Löschen';
            deleteButton.classList.add('deleteButton'); 
            deleteButton.onclick = function() {
                let row = this.parentNode.parentNode;
                row.parentNode.removeChild(row);
            };
            cell.appendChild(deleteButton);
        }
    }
});