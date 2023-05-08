class Professional {

    constructor(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    printAll() {
        console.log(this.name, this.age, this.weight, this.height, this.isRetired, this.nationality, this.oscarsNumber, this.profession)
    }

}




function getProf() {

    let param =
    {
        headers: { "Content-type": "application/jason; charset=UTF-8" },
        method: "GET"
    }
    const url = "http://localhost:3000/professional";


    fetch(url, param)
        .then(function (data) {
            return data.json()
        })


        .then(function (result) {
            console.log(result)

            let lista = document.getElementById("profesionalesEnLista");
            
            lista.innerHTML = 
            `<h4>Nombre: </h4><h5>${result.name}</h5><br>
            <h4>Edad: </h4><h5>${result.age}</h5><br>
            <h4>Peso: </h4><h5>${result.weight}</h5><br>
            <h4>Altura: </h4><h5>${result.height}</h5><br>
            <h4>Retirado: </h4><h5>${result.isRetired}</h5><br>
            <h4>Nacionalidad: </h4><h5>${result.nationality}</h5><br>
            <h4>Oscars: </h4><h5>${result.oscarsNumber}</h5><br>
            <h4>Profesión: </h4><h5>${result.profession}</h5><br>`

        })
        .catch(function (error) {
            console.log(error)

        })
}



function postProf() {

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let retirado = document.getElementById("retirado").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let numOscars = document.getElementById("numOscars").value;
    let profesion = document.getElementById("profesion").value;

    let professional = new Professional(nombre, edad, peso, altura, retirado, nacionalidad, numOscars, profesion)
    // console.log(professional);


    const url = "http://localhost:3000/professional";
    let param =
    {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(professional),
        method: "POST"
    }



    fetch(url, param)
        .then(function (data) {
            return data.json()

        })
        .then(function (result) {

            console.log(result)
            // aqui vendria el toast de Ruben
        })
        .catch(function (error) {
            console.log(error)
        })
}

function putProf() {

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let retirado = document.getElementById("retirado").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let numOscars = document.getElementById("numOscars").value;
    let profesion = document.getElementById("profesion").value;

    let professional = new Professional(nombre, edad, peso, altura, retirado, nacionalidad, numOscars, profesion)
    // console.log(professional);
    const url = "http://localhost:3000/professional";
    let param =
    {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(professional),
        method: "PUT"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()

        })
        .then(function (result) {

            console.log(result)
            // aqui vendria el toast de Ruben
        })
        .catch(function (error) {
            console.log(error)
        })
}

function deleteProf() {


    const url = "http://localhost:3000/professional";
    let param =
    {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        // body: JSON.stringify(professional),
        method: "DELETE"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()

        })
        .then(function (result) {

            console.log(result)
            // aqui vendria el toast de Ruben
        })
        .catch(function (error) {
            console.log(error)
        })
}



