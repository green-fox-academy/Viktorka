let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/info');
// xhr.open('GET', 'http://localhost:8080/titles');
const bodySelect = document.querySelector('body');


xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            bookInfo(response);
            console.log(response)

        }
    }
}
function titlesOfTheBooks(data) {
    for (let i = 0; i < data.length; i++) {
        let divElement = document.createElement('div');
        divElement.textContent = data[i].book_name;
        bodySelect.appendChild(divElement);
    }
}
function bookInfo(data) {
    let table = document.createElement('table');
    let tableRow = document.createElement('tr');
    let tableRow2 = document.createElement('tr');
    let tableHeader1 = document.createElement('th');
    let tableHeader2 = document.createElement('th');
    let tableHeader3 = document.createElement('th');
    let tableHeader4 = document.createElement('th');
    let tableHeader5 = document.createElement('th');
    let tableD = document.createElement('td');
    let tableD2 = document.createElement('td');
    document.body.appendChild(table);
    tableRow.appendChild(tableHeader1);
    tableRow.appendChild(tableHeader2);
    tableRow.appendChild(tableHeader3);
    tableRow.appendChild(tableHeader4);
    tableRow.appendChild(tableHeader5);
    table.appendChild(tableRow);
    table.appendChild(tableRow2);
    tableRow2.appendChild(tableD);
    tableRow2.appendChild(tableD2);

    tableHeader1.innerText = 'Titles';
    for (let i = 0; i < data.length; i++) {
        let pelement = document.createElement('p');
        pelement.textContent = data[i].book_name
        tableD.appendChild(tdelement)
    }
    tableHeader2.innerText = 'Author';
    for (let i = 0; i < data.length; i++) {
        let pelement2 = document.createElement('p');
        pelement2.innerText = data[i].aut_name;
        tableD2.appendChild(tdelement2);
    }
    tableHeader3.innerText = 'Category';
    tableHeader4.innerText = 'Publisher';
    tableHeader5.innerText = 'Price';



}


xhr.send();