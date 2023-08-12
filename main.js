console.log('Hello World!');

let text = document.getElementById('text')
let container = document.getElementById("container")

let z = document.getElementById('text').textContent
console.log(text.style.top)

let currentSpeed = 1000
let speed = 600


let isPlaying = false




let marginTop = 200
let speechScrollInterval

// Speech interval

let startInterval = () => {

speechScrollInterval = setInterval( () => {
  console.log("running...")
  if (isPlaying) {
    text.style.top = marginTop + "px"
    
    //console.log(text.getBoundingClientRect().y)
    
    marginTop -= 10
    
    if (text.style.bottom == "_&--0") {
     clearInterval(speechScrollInterval)
    }
  }
   
}, speed)


}



// Buttons functionality 

// Decrease speed
let decreaseSpeed = () => {
    
  if (speed >= 2000) {
    return
    
  } else {
    clearInterval(speechScrollInterval)
    speed += 200
    console.log(speed)
    startInterval()
  }
  
}

// Increase speed
let increaseSpeed = () => {
  
  console.log(speed)
  
  if (speed <200) {
    return
    
  } else {
    clearInterval(speechScrollInterval)
    speed -= 200
    
  }
  
  startInterval()
}


// Stop speech
let stopSpeech = () => {
  speed = 500
  marginTop = 200
  text.style.top = 10 + "px"
  clearInterval(speechScrollInterval)
  playButton.innerHTML = "<i class='fa fa-play'></i>"

  isPlaying = false
}

// Play speech
let playButton = document.getElementById("playState")

let playState = () => {
  if (isPlaying) {
    isPlaying = false
    clearInterval(speechScrollInterval)
    playButton.innerHTML = "<i class='fa fa-play'></i>"
  } else {
    isPlaying = true
    
    startInterval()
    playButton.innerHTML = "<i class='fa fa-pause'></i>"

  }
}



//Menu, Close, Submit functionality
let input = document.getElementById('input')
//menu

let showMenu = () => {
  input.style.top = 0
  //container.style.visibility = "hidden"
}


// Close

let closeMenu = () => {
  input.style.top = "-100%"
  console.log("closeMenu called!")
}

// handleSubmit
let handleSubmit = () => {
  let textarea = document.querySelector("textarea")
  let inputText = textarea.value
  if (inputText.length < 100) {
    return alert("Speech must be at least 100 characters long.")
  }
  text.textContent = inputText
  textarea.value = ""
  input.style.top = '-100%'
  stopSpeech()
  
  }
