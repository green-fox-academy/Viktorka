let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8080/titles');
const bodySelect = document.querySelector("body");


xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            titlesOfTheBooks(response)
        }
    }
}

function titlesOfTheBooks(data) {
    for (let i = 0; i < data.length; i++) {
        let divElement = document.createElement("div");
        divElement.textContent = data[i].book_name;
        document.body.appendChild(divElement)
    }
}




xhr.send();