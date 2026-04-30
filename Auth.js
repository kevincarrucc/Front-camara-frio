async function verificarSesion() {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "index.html";
    return;
  }

  try {
    const response = await fetch("https://back-camara-frio.onrender.com/verify-session", {
      method: "POST",
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