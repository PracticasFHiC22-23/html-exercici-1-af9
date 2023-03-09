//Funcionalidad "Lista de TODOs" SIN usar Vue
// Aproximación imperativa: le decimos paso por paso lo que tiene que hacer

/* creo 3 constantes, la primera para acceder al único elemento 
   button de la pagina,
   idem para el elemento input y lista
   querySelector devuelve el primer elemento que coincida con el
   grupo especificado de selectores
*/

const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

//se ejecuta al cliclar al button
function addTask() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

buttonEl.addEventListener("click", addTask);