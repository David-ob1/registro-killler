function displayFileName() {
    const $button = document.getElementById("custom-button")
    const fileInput = document.getElementById('file-input');
    const fileNameDisplay = document.getElementById('file-name');
    const fileName = fileInput.files[0].name;
    fileNameDisplay.textContent = ` ${fileName}`;

    $button.style.background = "#ad2828"
    $button.style.color = "#fff"
   
}
let btn = document.getElementById("addKiller")
let layout = document.querySelector("#layout")



btn.addEventListener("click", e =>{
    e.preventDefault()

  const valores = obtenerValores()
    
    console.log(valores.killer)
    console.log(valores.skill)
    console.log(valores.height)
    console.log(valores.speed)
    console.log(valores.terrorRadius)
    console.log(valores.image)

   

    let background = `url('${URL.createObjectURL(valores.image)}')`
    fondoDinamico(layout,background)

})


function obtenerValores (){
    const fileInput = document.getElementById('file-input');

    return {
        killer: document.getElementById("killer").value,
        skill: document.getElementById("skill").value,
        height: document.getElementById("height").value,
        speed: document.getElementById("speed").value,
        terrorRadius: document.getElementById("terrorRadius").value,
        image : fileInput.files[0] ? fileInput.files[0] : null

    };
}


function fondoDinamico(container,img){

    container.style.background = img

}