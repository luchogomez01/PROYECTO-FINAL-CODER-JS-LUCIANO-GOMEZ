const calculadora = new Calculadora([], {});


function init()
{
   listaDisciplinas();
}


function listaDisciplinas(){

      const nodoDisciplinas = document.getElementById("disciplinas")
      let contenido="<ul>";

      for(disciplina of disciplinas)
      {
         contenido+=`<li onclick="listaClasesacro(${disciplina.id})">${disciplina.nombre}</li>`;
      }

      contenido+="</ul>";

      nodoDisciplinas.innerHTML=contenido;



}


function listaClasesacro(idDisciplinas)
{
   const nodoClasesacro = document.getElementById("clasesacro")
   nodoClasesacro.innerHTML="";
   let lista=document.createElement("div");

   const productosDisciplinas= clasesacro.filter(element=> element.disciplina===idDisciplinas);


   for(var i=0;i<productosDisciplinas.length; i++)
   {
      let clasesacro = productosDisciplinas[i];

      let item  = document.createElement("div");
      item.innerHTML=`<div><h2>PROFESOR/A:${clasesacro.Profesor}</h2></div>
      <div>$${clasesacro.precio}</div>
      <div>horario: ${clasesacro.turno}</div>
      <div>${clasesacro.dias}</div>
      `;

      let boton = document.createElement("button");
      boton.onclick = () => {
        calculadora.agregarclasesacro(clasesacro);
         actualizarCalculadora();
      }
      

      boton.innerHTML="Calcule precio";

      item.appendChild(boton);

      lista.appendChild(item);
      

   }
   nodoClasesacro.appendChild(lista);
}

function actualizarCalculadora()
{

const nodoCalculadora = document.getElementById("calculadora");
nodoCalculadora.innerHTML="";
const clasesacro = calculadora.clasesacro;

   let contador = 0;
   while(contador<clasesacro.length)
   {
      let claseacro = clasesacro[contador];

      let item  = document.createElement("div");
      item.innerHTML=`<div><h2>PROFESOR/A:${claseacro.Profesor}</h2></div>
      <div>$${claseacro.precio}</div>
      <div>horario: ${claseacro.turno}</div>
      <div>${claseacro.dias}</div>
      `;
      nodoCalculadora.appendChild(item);

      let botonQuitar = document.createElement("button");
      botonQuitar.innerHTML="ELIMINAR";
      botonQuitar.onclick=()=>
      {
         if(confirm)
         {
               calculadora.eliminarclasesacro(claseacro);
               actualizarCalculadora();
         }
      }

      nodoCalculadora.appendChild(botonQuitar);

      contador++;

   }
   const nodoContendorTotal = document.createElement("div");
   nodoContendorTotal.appendChild(document.createElement("hr"));
   const total = calculadora.totalizar();

   const nodoTotal = document.createElement("div");
   nodoTotal.innerHTML=total

   nodoContendorTotal.appendChild(nodoTotal);

   nodoCalculadora.appendChild(nodoContendorTotal);
  }






