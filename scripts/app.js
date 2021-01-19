let button = document.getElementById('button');
let columns = document.getElementById('columns');
let rows = document.getElementById('rows');
let table = document.getElementById('table');


button.addEventListener('click', function (e) {
    e.preventDefault();

    let numOfColumns = columns.value;
    let numOfRows = rows.value;
    let tableColumns = '<tr>';
    let tableRows = '';

    for (let column = 1; column <= numOfColumns; column++) {
        tableColumns += `<th>Column ${column}</th>`;
    }

    tableColumns += '</tr>';

    for (let row = 1; row <= numOfRows; row++) {
        tableRows += '<tr>';
        for (let column = 1; column <= numOfColumns; column++) {
            tableRows += `<td> Column ${column} Row ${row}</td>`;
        }
        tableRows += '</tr>';
    }

    table.innerHTML = tableColumns + tableRows;
})