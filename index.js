// **Instructions**:
// * Select the `header` that is the closest to the first `h1` heading. Give the `header` a solid border of 5px. ![alt text](images/header.png "Header")

const h1 = document.querySelector("h1")
h1.closest("header").style.border="5px solid black"


// * If the `.info` section contains an `.info-package`, select all `package-title`s and give the title's previous element a border. ![alt text](images/packages.png "Packages")


 const info = document.querySelector(".info")
 info.querySelectorAll(".info-package").forEach(infoSection=>{

     infoSection.querySelector(".package-title").previousElementSibling.style.border= "2px solid green"

 })


// * Check if the label's class matches "mild". If so, give the label a yellow solid border. If the label's class matches "intense", give the label an orange solid border. If the class does not match either, give the label a red solid border. ![alt text](images/packages.png "Packages")

document.querySelectorAll("label").forEach(lab=>{
    if(lab.classList.contains("mild")){
        lab.style.border="2px solid yellow"
    }else if(lab.classList.contains("intense")){
        lab.style.border="2px solid orange"
    }else{
        lab.style.border="2px solid red"
    }
})

// * Add all the children of the `.nav-list` to the footer's unordered list, `.site-map`. Note: the `.nav-list` should still contain its children. ![alt text](images/footer.png "Footer")

const navListChildren = Array.from(document.querySelector(".nav-list").children)

navListChildren.forEach(child=>{

    document.querySelector(".site-map").append(child.cloneNode(true))
})





// **Bonus**
// After you completed the assignment and published the solution branch, you can create a new branch `feature/restyle` and change the design of the landing-page. You can publish it on GitHub Pages when you are satisfied with the result.
