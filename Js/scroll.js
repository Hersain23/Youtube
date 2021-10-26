let $lateral = document.getElementById("menu-lateral");

$lateral.addEventListener("mouseover",()=>{
    $lateral.style.overflowY="scroll"
    $lateral.classList.add("menu-lateral")
})

$lateral.addEventListener("mouseout",()=>{
    $lateral.style.overflow=""
})