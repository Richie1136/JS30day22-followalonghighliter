const links = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')

document.body.append(highlight)

const highlightLink = () => {
  console.log('Highlight')
}

links.forEach((link) => {
  link.addEventListener('mouseenter', highlightLink)
})