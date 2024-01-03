// Динамічно створити таблицю множення 10х10 і додати на сторінку. Стилізувати таблицю за власним смаком, додавши таблиці 
// відповідний клас і стилі в css файлі.

// Ніякого хардкодинга! Розмірність таблиці має бути легко змінити
const num = 10;
const table = document.createElement(`table`);
function createTable(num, table){
    for(let i = 1; i <= num; i++){
        let row = document.createElement(`tr`);
      
        for(let j = 1; j <= num; j++){ 
            let cell = document.createElement(`td`);
            cell.textContent = i * j;
            row.appendChild(cell) 
        }

        table.appendChild(row)
    }
}
document.body.appendChild(table)
createTable(num, table)

