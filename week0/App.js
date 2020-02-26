

// NOTE : In order to make the page as whole and in particular the navbar more dynamic, interactive and responsive I used javascript  

/*  To create a fixed menu appears once it is clicked */

const navSlider =()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-lists');

    burger.addEventListener('click', () => {
        nav.classList.toggle("nav-active");
    });
}
/* To make the Frequent questions' boxes collapse once it is clicked*/
const drop =() =>{
    var acc = document.getElementsByClassName("collapse");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } 
            else 
            {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
}

/* a function to gather up the main two functions which were defined above and provoke them inside the App function body */ 
const App =() =>{
    navSlider();
    drop();
}

App();