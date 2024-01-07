


const num = 10;
const table = document.createElement('table');


const headerRow = document.createElement('tr');
headerRow.appendChild(createHeaderCell('x')); 

for (let i = 1; i <= num; i++) {
    headerRow.appendChild(createHeaderCell(i)); 
}

table.appendChild(headerRow);

for (let i = 1; i <= num; i++) {
    const row = document.createElement('tr');
    row.appendChild(createHeaderCell(i)); 

    for (let j = 1; j <= num; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);
    }

    table.appendChild(row);
}

document.body.appendChild(table);

function createHeaderCell(text) {
    const headerCell = document.createElement('th');
    headerCell.textContent = text;
    return headerCell;
}
