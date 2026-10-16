const form =document.getElementById("loginForm");
const mensaje =document.getElementById("mensaje");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
   
    const usuario = document.getElementById("usuario").value;
    const clave =document.getElementById("clave").value;
     const respuesta = await fetch("/api/login",{
        method:"POST",
    Headers:{"Content-Type":"application/json"},
body: JSON.stringify({ usuario, clave})
});
const datos = await respuesta.json();
mensaje.textContent = datos.mensaje;
if(datos.ok){
    mensaje.style.color="#00ff88";
    setTimeout(() =>{
        alert("Bienvenido, entraste al portal");
     }, 500);
} else {
    mensaje.style.color = "#ff3b9a";
}
})