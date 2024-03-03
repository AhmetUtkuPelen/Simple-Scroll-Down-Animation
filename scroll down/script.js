
// ! ANIMATION STUFF ! \\

let options = {

    threshold : [0.1 , 0.2 , 0.3 , 0.4 , 0.5 , 0.6 , 0.7 , 0.8 , 0.9 , 1]

}

let callback = (entries , observer) => {

    entries.forEach((entry) => {

        entry.target.style.scale = entry.intersectionRatio 

    })

}

let observer = new IntersectionObserver(callback,options)

for (let target of document.querySelectorAll('.item')){

    observer.observe(target)



}

// ! RADIUS STUFF ! \\

function radius(){

    let borderRadius1 = document.querySelector('#first')

    let borderRadius2 = document.querySelector('#second')

    let borderRadius3 = document.querySelector('#third')

    let borderRadius4 = document.querySelector('#fourth')

    let borderRadius5 = document.querySelector('#fifth')

    let borderRadius6 = document.querySelector('#sixth')


    borderRadius1.style.borderRadius = "55px"

    borderRadius2.style.borderRadius = "55px"

    borderRadius3.style.borderRadius = "55px"

    borderRadius4.style.borderRadius = "55px"

    borderRadius5.style.borderRadius = "55px"

    borderRadius6.style.borderRadius = "55px"

}
radius()