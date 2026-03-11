// obtener token guardado
const token = localStorage.getItem("token");

// detectar en qué página estamos
const paginaActual = window.location.pathname.split("/").pop();

// lista de páginas que requieren login
const paginasProtegidas = [
"inicio.html",
"temperatura.html",
"consumo.html",
"historicos.html"
];

// si la página necesita login y no hay token
if(paginasProtegidas.includes(paginaActual) && !token){

window.location.href = "index.html";

}

// función para cerrar sesión
function logout(){

localStorage.removeItem("token");
window.location.href = "index.html";

}