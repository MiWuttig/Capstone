var ham = "";
var list = "";

function OpenHamburger(OpenClosed) {
    switch (OpenClosed) {
        case "open":
            ham.classList.add("open");
            list.classList.add("open");
        break;

        case "closed":
            ham.classList.remove("open");
            list.classList.remove("open");
        break;
    
        default:
            if (ham.classList.contains("open")) {
                ham.classList.remove("open");
                list.classList.remove("open");
            } else {
                ham.classList.add("open");
                list.classList.add("open");
            };
        break;
    }
}   

document.addEventListener("DOMContentLoaded", function(e){
    ham = document.getElementById("Hamburger");
    list = document.getElementsByTagName("header")[0].getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];

    var mqls = [
        window.matchMedia("(max-width: 767px)"),
        window.matchMedia("(min-width: 768px) and (max-width: 991px)"),
        window.matchMedia("(min-width: 922px) and (max-width: 1199px)"),
        window.matchMedia("(min-width: 1200px)")
    ]

    WidthChange();

    for (i = 0; i < mqls.length; i++){mqls[i].addListener(WidthChange);};

    function WidthChange(){
        if (mqls[0].matches) {

        } else if (mqls[1].matches) {
            ham.classList.remove("open");
            list.classList.remove("open");
        } else if (mqls[2].matches) {
            ham.classList.remove("open");
            list.classList.remove("open");
        } else if (mqls[3].matches) {
            ham.classList.remove("open");
            list.classList.remove("open");
        }
    };
})

function onScroll() {
    if (window.pageYOffset >= 200){
        $( ".StickyHeader" ).css("background-color" , "#eff8ef");
        $( ".StickyHeader" ).css("border-bottom" , "1px solid #808d21");
    } else {
        $( ".StickyHeader" ).css("background-color" , "transparent");
        $( ".StickyHeader" ).css("border" , "none");
    }

    let fromTop = window.scrollY;
    document.querySelectorAll("nav a").forEach(link => {
        let section = document.querySelector(link.hash);
        if (section != null) {
            if (
                section.offsetTop <= (fromTop+80) &&
                section.offsetTop + section.offsetHeight > (fromTop+80)
                ) {
                link.classList.add("current");
                var t1 = link.href;
                var t2 = t1.endsWith("#Contact");
                if (t2) {
                    document.getElementsByClassName("socialMediaBox")[0].style.display = "none";
                } else {
                    document.getElementsByClassName("socialMediaBox")[0].style.display = "block";
                };
            } else {
                link.classList.remove("current");
            }
        }
    });
}