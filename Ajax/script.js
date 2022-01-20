let loadData = e => {
    let number = document.getElementById('numberJokes').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h2>Please Wait...</h2>";
    }
    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let joke = data.value;
            let output = "<ol>";
            joke.forEach(function (item) {
                output += `<li> ${item.joke} </li>`;
            });
            output += "</ol>";
            document.getElementById('output').innerHTML = output;
        }
    }
    xhr.send();
}

document.getElementById('btn').addEventListener('click', loadData);