async function verificarSesion() {
  const token = localStorage.getItem("token");//localStorage del navegador guarda el token que recibimos en /login.

  if (!token) {
    window.location.href = "index.html";
    return;
  }

  try {
    const response = await fetch("https://back-camara-frio.onrender.com/verify-session", {//Hace un POST a /verify-session y envía el token en el header Authorization.
      method: "POST",//POST se usa para enviar datos al servidor
      headers: {
        "Authorization": token
      }
    });

    if (!response.ok) {
      window.location.href = "index.html";
    }

  } catch (err) {
    console.error(err);
    window.location.href = "index.html";
  }
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}