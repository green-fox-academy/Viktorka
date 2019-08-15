let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/info');
// xhr.open('GET', 'http://localhost:8080/titles');
const bodySelect = document.querySelector("body");


xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            bookInfo(response);
        
        }
    }
}
function titlesOfTheBooks(data) {
    for (let i = 0; i < data.length; i++) {
        let divElement = document.createElement("div");
        divElement.textContent = data[i].book_name+ " " +data[i].book_price
        bodySelect.appendChild(divElement);
    }
}
function bookInfo(data){
    for (let i = 0; i < data.length; i++) {
        let h3element = document.createElement("h3");
        h3element.textContent = data[i].book_name+" by "+data[i].aut_name+" "+data[i].cate_descrip;
        document.body.appendChild(h3element)
    }
}


xhr.send();