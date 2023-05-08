// Los retos se deben hacer en la rama dia4 subir los cambios y hacer el merger con la rama master.
// ● Crea un API REST para la clase profesional de vuestra aplicación IMDB
// ● Con todos los verbos HTTP
// ● Que reciban información por la petición y la devuelvan por la respuesta
// Aqui van los endpoint son:
// ● GET /profesional. Obtiene el profesional.
// ● POST /profesional. Crea un nuevo objeto profesional.
// ● PUT /profesional. Modifica los datos del profesional.
// ● DEL /profesional. Elimina al profesional.



const Professional = require("../models/professional");

let profesional = null;

//let profesional = new Professional('Lucia', 26, 80, 180, false, 'colombian', 3, 'actress');


function getProfessional(request, response) {
    let respuesta;
    if (profesional != null)
        respuesta = profesional;
    else
        respuesta = { error: true, codigo: 200, mensaje: 'El profesional no existe' };

    response.send(respuesta);
};

function postProfessional(request, response) {
    console.log(request.body);
    let respuesta;
    if (profesional === null) {

        profesional = new Professional( 
            request.body.name,
            request.body.age,
            request.body.weight,
            request.body.height,
            request.body.isRetired,
            request.body.nationality,
            request.body.oscarsNumber,
            request.body.profession);


        respuesta = { error: false, codigo: 200, mensaje: "Profesional creado", resultado: profesional };
    } else
        respuesta = { error: true, codigo: 200, mensaje: 'El profesional ya existe', resultado: null };

    response.send(respuesta);

};

function putProfessional(request, response) {
    let respuesta;
    if (profesional != null) {
            profesional.name = request.body.name,
            profesional.age = request.body.age,
            profesional.weight = request.body.weight,
            profesional.height = request.body.height,
            profesional.isRetired = request.body.isRetired,
            profesional.nationality = request.body.nationality,
            profesional.oscarsNumber = request.body.oscarsNumber,
            profesional.profession = request.body.profession,
            respuesta = { error: false, codigo: 200, mensaje: 'Profesional actualizado', resultado: profesional }
    } else
        respuesta = { error: true, codigo: 200, mensaje: 'El profesional no existe', resultado: profesional };

    response.send(respuesta);

};

function deleteProfessional(request, response) {
    let respuesta;
    if (profesional != null) {
        profesional = null;
        respuesta = { error: false, codigo: 200, mensaje: 'Profesional borrado', resultado: profesional };
    }
    else
        respuesta = { error: true, codigo: 200, mensaje: 'El rofesional no existe', resultado: profesional };
    
    response.send(respuesta);

};

module.exports = {getProfessional, postProfessional, putProfessional, deleteProfessional}