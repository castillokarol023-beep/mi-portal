const express = require("express");
const app = express();
app.use(express.static("."));
app.use(express.json());

app.post("/api/login",(req,res) =>{
const { usuario, clave} = req.body;
if (usuario === "karol" && clave ==="1234"){
    res.json({ ok: true, mensaje: "Bienvenido al portal"})
} else{
    res.json({ok:false, mensaje:"usuario o clave incorrectos"});
}
});

app.listen(3000,() => console.log("portal en http://localhost:3000"))