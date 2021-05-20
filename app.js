
/*global vars*/
const allsec = document.querySelectorAll("section");
const Nav = document.querySelector("#navbar__list");
const frag = document.createDocumentFragment();


/*create dynamically nav list*/
allsec.forEach((elm) => {
    const dataNav = elm.getAttribute("data-nav");
    const itemLi = document.createElement("li");
    itemLi.innerText = dataNav;
    frag.appendChild(itemLi);
    itemLi.addEventListener("click", () => {
        elm.scrollIntoView({
            behavior: "smooth"
        });
    });
});
Nav.appendChild(frag)

/*select which section is selected*/
window.addEventListener("scroll", () => {
    allsec.forEach((sec) => {
        /*using getBoundingRect() method to find starting for each sec*/
        rect = sec.getBoundingClientRect();

        if (rect.top >= -50 && rect.top <= 200) {
            sec.classList.add("your-active-class");

        } else {
            sec.classList.remove("your-active-class")
        }
    })
})