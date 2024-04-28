document.getElementById('addRowButton').addEventListener('click', function() {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(table.rows.length); 

    for (var i = 0; i < 7; i++) { 
        var cell = newRow.insertCell(i); 
        cell.contentEditable = true; 

        if (i < 4) { 
            cell.textContent = "Neuer Eintrag"; 
        } else if (i === 4 || i === 5) { 
            var checkbox = document.createElement('input'); 
            checkbox.type = "checkbox"; 
            cell.innerHTML = ''; 
            cell.appendChild(checkbox); 
        }

        if (i === 6) { 
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Löschen';
            deleteButton.classList.add('deleteButton'); 
            deleteButton.onclick = function() {
                var row = this.parentNode.parentNode;
                row.parentNode.removeChild(row);
            };
            cell.appendChild(deleteButton);
        }
    }
});