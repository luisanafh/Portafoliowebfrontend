let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3500;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform 1s";
    contador++;

    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },1500)
    }
}

// animacion al hacer scroll

window.sr = ScrollReveal();
    sr.reveal('header', {
        duration: 3000,
        origin: 'bottom',
        distance: '-100px'
    });

    window.sr = ScrollReveal();
    sr.reveal('.Home', {
        duration: 4000,
    });

    window.sr = ScrollReveal();
    sr.reveal('.Aboutme', {
        duration: 2000,
    });
    window.sr = ScrollReveal();
    sr.reveal('.Projects1', {
        duration: 2000,
    });
    window.sr = ScrollReveal();
    sr.reveal('.Contact', {
        duration: 2000,
    });
    window.sr = ScrollReveal();
    sr.reveal('.animation', {
        duration: 5000,
        rotate: {
            x:1,
            y:188,
        }
    });