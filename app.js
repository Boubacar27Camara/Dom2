async function main () {
    const wrapper = document.querySelector('#lastPosts');
const loader = document.createElement('p');
loader.innerText = 'Chargement...'
wrapper.append(loader)

const r = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5', {
    headers: {
        Accept: 'application/json'
    }
})

if (!r.ok){
    loader.innerText = 'Impossible de charger les articles '
    loader.style.color = 'red'
    return 
}
}
main()
// const li = document.querySelector('li')
// const ul = document.querySelector('ul')
// console.log(ul.contains(li))
// ul.append(li.cloneNode(true))
// console.log(
//     li.remove()
// )
// console.log(
    // ul.childNodes // nous envoies tous les noeuds du liste mm les espace.
// )
// window.a = ul.children
// console.log(
//     ul.children
// )
// const li = document.querySelector('ul li:first-child')
// const ul = document.querySelector('ul')
// const div = document.createElement('div')
// div.innerHTML = 'Bonjour les gens'
// ul.insertAdjacentElement('afterbegin', div)
// ul.append(li)
// const newLi = document.createElement('li') // li existe dans notre memoire javascript mais pas dans notre dom
// newLi.innerHTML = 'Bonjour les gens'
// document.querySelector('ul').appendChild(newLi)

// console.log(getComputedStyle(li).color)
    // li.style = 'blue'
    // li.style.fontWeight = 'bold'

// lis.forEach(v => console.log(v))
//console.log(Array.from(lis)) //convertir notelist en Array
// ul.setAttribute('hidden', 'hidden')
// ul.removeAttribute('hidden')
// console.log(ul.getAttribute('class'))
// console.log(ul.classList.remove('red')) //remove supprimer une classe // DOMTokenList
// setInterval(() =>{
   //  ul.classList.toggle('red') // il ajoute la classe s'il n'existe pas il la suppr s'il existe.

// }, 1000)
