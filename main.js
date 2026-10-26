let logueado = false;

function mostrar(id) {
    if (!logueado) {
        alert("Primero debe iniciar sesión");
        return;
    }
    document.querySelectorAll(".seccion").forEach(s =>s.style.display = "none");
    document.getElementById(id).style.display = "block";
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const u = document.getElementById("usuario").value;
    const c = document.getElementById("clave").value;

    if (u ==="karol" && c === "1234") {
        logueado = true;
        document.querySelector(".contenedor").style.display = "none";
        document.getElementById("menu").style.display = "flex";
        document.getElementById("inicio").style.display = "block";
        alert("Bienvenido al portal");
    } else {
        document.getElementById("mensaje").textContent = "Usuario o clave incorrectos";
    }
});