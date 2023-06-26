document.addEventListener("DOMContentLoaded", function() {
    fetch('db.sqlite')
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        var data = new Uint8Array(arrayBuffer);
        var db = new SQL.Database(data);
  
        // Execute the SQL query to retrieve data
        var query = "SELECT * FROM Candidates"; // Replace 'your_table' with the actual table name
        var result = db.exec(query);
  
        // Get the table body element
        var tableBody = document.querySelector("data-table tbody");
  
        // Iterate over the result and populate the table
        result[0].values.forEach(function(row) {
          var newRow = document.createElement("tr");
          row.forEach(function(column) {
            var newCell = document.createElement("td");
            newCell.textContent = column;
            newRow.appendChild(newCell);
          });
          tableBody.appendChild(newRow);
        });
      })
      .catch(error => {
        console.error("Error loading database:", error);
      });
  });
  