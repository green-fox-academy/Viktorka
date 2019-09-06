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
    let tableD3 = document.createElement('td');
    let tableD4 = document.createElement('td');
    let tableD5 = document.createElement('td');
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
    tableRow2.appendChild(tableD3);
    tableRow2.appendChild(tableD4);
    tableRow2.appendChild(tableD5);

    tableHeader1.innerText = 'Titles';
    for (let i = 0; i < data.length; i++) {
        let pelement = document.createElement('p');
        pelement.textContent = data[i].book_name
        tableD.appendChild(pelement)
    }
    tableHeader2.innerText = 'Author';
    for (let i = 0; i < data.length; i++) {
        let pelement2 = document.createElement('p');
        pelement2.innerText = data[i].aut_name;
        tableD2.appendChild(pelement2);
    }
    tableHeader3.innerText = 'Category';
    data.forEach(element => {
        let pelement3 = document.createElement('p');
        pelement3.innerText = element.cate_descrip;
        tableD3.appendChild(pelement3);
    });
    tableHeader4.innerText = 'Publisher';

    for (let i = 0; i < data.length; i++) {
        let pelement4 = document.createElement('p');
        pelement4.innerText = data[i].pub_name;
        tableD4.appendChild(pelement4);
    }
    tableHeader5.innerText = 'Price';
    // data.forEach(element => {
    //     let pelement5 = document.createElement('p');
    //     pelement5.innerText = element.book_price;
    //     tableD5.appendChild(pelement5);
    // })
    for (let i = 0; i < data.length; i++) {
        let pelement5 = document.createElement('p');
        pelement5.innerText = '$ ' + data[i].book_price;
        tableD5.appendChild(pelement5);
    }

}


xhr.send();