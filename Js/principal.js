var $js = document.getElementById("seccion-musica-menu-js")
var xhr = new XMLHttpRequest()
var d = document;

d.addEventListener("readystatechange",(e)=>{
    if(xhr.readyState != 4)return;
    if(xhr.status >= 200 && xhr.status <=300){
        let respuesta = xhr.responseText;
        $js.innerHTML = respuesta;
    }
    else{
        let message = xhr.statusText || "Ocurrio un error";
        alert(message)
    }
})

xhr.open("GET","paginaPrincipal.html")
xhr.setRequestHeader("Content-type","text/html;charset=utf-8")
xhr.send()