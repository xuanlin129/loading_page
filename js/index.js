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

function safariHacks() {
  let windowsVH = window.innerHeight / 100;
  document.querySelector('.wrap').style.setProperty('--vh', windowsVH + 'px');
  window.addEventListener('resize', function() {
      document.querySelector('.wrap').style.setProperty('--vh', windowsVH + 'px');
  });
}

safariHacks();