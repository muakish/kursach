document.addEventListener("DOMContentLoaded", function() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var xml = xhr.responseXML;
        if (xml) {
          var rows = xml.querySelectorAll('row');
          var table = document.createElement('div');
          table.classList.add('price-table');

          rows.forEach(function(row) {
            var rowElement = document.createElement('div');
            rowElement.classList.add('row');
            var cells = row.querySelectorAll('cell');
            cells.forEach(function(cell) {
              var cellElement = document.createElement('div');
              cellElement.classList.add('cell');
              cellElement.textContent = cell.textContent;
              rowElement.appendChild(cellElement);
            });
            table.appendChild(rowElement);
          });

          document.getElementById('price-table').appendChild(table);
        } 
      } 
    }
  };
  xhr.open('GET', 'prices.xml');
  xhr.send();
});