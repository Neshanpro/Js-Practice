let persons = [
    { firstName: "Neshan", lastName: "Parvej" },
    { firstName: "Jayed", lastName: "Kyo" }
];

function createPerson(person) {
    let prom = new Promise(function (resolve, reject) {
        setTimeout(function () {
            persons.push(person)
            let err = false;
            if (!err) {
                resolve();
            }
            else {
                reject('Something is wrong!')
            }
        }, 4000)
    });
    return prom;
};

function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li> ${person.firstName} ${person.lastName} </li>`
        });
        document.getElementById('output').innerHTML = output;
    }, 1000)
};

createPerson({ firstName: "Kratos", lastName: "Aurthur" }).then(getPerson).catch(function (err) {
    console.log(err);
});