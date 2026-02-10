let noCount = 0

const noMessages = [
  "Bro wtf?",
  "Nah youre playing",
  "napoleon is still my goat",
  "i know where you live",
  "Im gonna drop the stinkinest fart",
  "messi the goat",
  "pls say yes"
]

const noImages = [
  "images/pic1.JPG",
  "images/pic2.jpeg",
  "images/pic3.JPG",
  "images/pic5.jpeg",
  "images/pic6.jpeg",
  "images/pic7.gif",
  "images/pic8.jpg"
]

const startScreen = document.getElementById("startScreen")
const container = document.getElementById("container")
const noBtn = document.getElementById("noBtn")
const yesBtn = document.getElementById("yesBtn")
const message = document.getElementById("message")
const mainImage = document.getElementById("mainImage")
const finalScreen = document.getElementById("finalScreen")

/* START SCREEN */
startScreen.addEventListener("click", () => {
  startScreen.style.opacity = "0"
  startScreen.style.pointerEvents = "none"

  setTimeout(() => {
    startScreen.style.display = "none"
    container.classList.remove("hidden")
  }, 300)
})

/* NO BUTTON */
noBtn.addEventListener("click", () => {
  if (noCount < noMessages.length) {
    message.textContent = noMessages[noCount]
    mainImage.src = noImages[noCount]
    noCount++
  }

  if (noCount >= noMessages.length) {
    noBtn.addEventListener("mouseover", moveNoButton)
  }
})

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 120)
  const y = Math.random() * (window.innerHeight - 120)

  noBtn.style.position = "absolute"
  noBtn.style.left = x + "px"
  noBtn.style.top = y + "px"
}

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  mainImage.src = "images/pic4.jpeg"

  setTimeout(() => {
    finalScreen.style.display = "flex"
    finalScreen.innerHTML = `
      <img src="images/love.png">
      <h1>HAPPY VALENTINES</h1>
    `
  }, 600)
})
