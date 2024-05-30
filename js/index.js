const loadingBox = document.querySelector('.loading-box')
const content = document.querySelector('.content')
window.addEventListener('load', () => {
  content.style.transform = 'translateY(20%)'
  setTimeout(() => {
    content.style.transform = 'translateY(-400%)'
  }, 700)
  setTimeout(() => {
    loadingBox.style.opacity = '0'
  }, 1000)
  setTimeout(() => {
    loadingBox.style.display = 'none'
  }, 2000)
})