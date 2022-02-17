const crearCuenta = $("#botonEnviar") [0];


$("#botonEnviar").on("click", ()=>
{

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const consultas = document.getElementById("consultas").value;

    const miUsuario = new Usuario("","","","");
    miUsuario.registrar(nombre,apellido,email,consultas);

    alert("Muchas gracias por contactarse, en breve nos comunicaremos");
    
    
})
class Usuario{
    constructor(nombre,apellido, email, consultas)
    {
        this.nombre = nombre;
        this.apellido=apellido;
        this.email= email;
        this.consultas=consultas;
    
    }

    registrar(nombreIngresado,apellidoIngresado,emailIngresado,consultaIngresada)
    {
       
        const newRegistro = new Usuario(nombreIngresado,
                                    apellidoIngresado,
                                    emailIngresado,
                                    consultaIngresada)


        localStorage.setItem(emailIngresado, JSON.stringify(newRegistro))
        
        alert("REGISTRO EXISTOSO");

    }

}

function printUsuariosRegistrados(info)
{

    for(let i=0;i<localStorage.length;i++)
    {
        const llave = localStorage.key(i);
        const dato = JSON.parse(localStorage.getItem(llave));


        
    }


}
$("#botonEnviar").on("mousedown", ()=>
{
    crearCuenta.style.backgroundColor="green"
    crearCuenta.style.color="black"
})
$("form").prepend('<button id="Mostrar">Mostrar</button>');

$("#Mostrar").on("click", ()=>
{
$("fieldset").toggle("fast")
})





