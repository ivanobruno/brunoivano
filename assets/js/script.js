/*Scrollify*/
$.scrollify({
	section : ".box",
	scrollbars:"false",
	interstitialSection : "#header,#footer",
	easing: "swing",
    scrollSpeed: 50,
	before:function(i,panels) {
    var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
    },
    afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
    $(".box").each(function(i) {
        activeClass = "";
        if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
        }
        pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
    });
    pagination += "</ul>";
    $("#box1").append(pagination);
    $(".pagination a").on("click",$.scrollify.move);
    }
});
/* Carousel Words IT*/
var parole = ['Sviluppatore', 'Abile', 'Creativo', 'Affidabile', 'Energico']
var counter = 0;
var parola = document.getElementById("carosello-words");
setInterval(update_carosello_words, 1000);
function update_carosello_words(){
    parola.innerHTML = parole[counter];
    counter++;
    if(counter >= parole.length){
        counter = 0;
    }
};
/* Carousel Words EN*/
var words = ['Developer', 'Able', 'Creative', 'Dependable', 'Energetic']
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 1000);
function update_carousel_words(){
    word.innerHTML = words[counter];
    counter++;
    if(counter >= words.length){
        counter = 0;
    }
};
//particlesJS
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
    },
    move: {
        enable: true,
        speed: 6,
        direction: "bottom",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
    detect_on: "canvas",
    events: {
        onhover: { enable: true, mode: "" },
        onclick: { enable: true, mode: "" },
        resize: true
    },
    modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});
/* bouncing letters top*/
document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
    element.addEventListener("mouseover", (e) => bounce(e.target));
});
function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
        letter.classList.add("bounce");
        setTimeout(
            function () {
                letter.classList.remove("bounce");
            },
            1000
        );
    }
}