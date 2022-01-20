let getData = () => {
    fetch('http://api.icndb.com/jokes/random/')
        .then(res => {
            return res.json();
        }).then(data => {
            let joke = data.value.joke;
            document.getElementById('output').innerHTML = `<h3>${joke}</h3>`;
        }).catch(err => {
            console.log(err);
        })
}

document.getElementById('btn').addEventListener('click', getData);