document.getElementById('addRowButton').addEventListener('click', function() {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(table.rows.length); 

    for (var i = 0; i < 6; i++) {
        var cell = newRow.insertCell(i); 
        cell.contentEditable = true; 
        cell.textContent = "Neuer Eintrag"; 

        if (i === 4 || i === 5) { 
            var checkbox = document.createElement('input'); 
            checkbox.type = "checkbox"; 
            cell.innerHTML = ''; 
            cell.appendChild(checkbox); 
        }
    }
});