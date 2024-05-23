$('a[href="#"]').on('click', e => e.preventDefault());


/************ 로딩페이지 ********/
function hideLoader() {
    $('.loader-container').slideUp();
    $(".contents").show();
  }
  
  window.addEventListener('load', () => {
    $(".contents").css({'display':'none'});
    setTimeout(hideLoader, 3600);
  });



/************ 로딩 글씨 ********/
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    this.specialText = newText === "Do beaurit now!"
    this.yellowText = newText === "Are you in love with yourself?"
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud special-char">${char}</span>`
      } else {
        output += from
      }
    }
    if (this.specialText) {
      this.el.innerHTML = `<span class="highlight">${output}</span>`
    } else if (this.yellowText) {
      this.el.innerHTML = `<span class="yellow">${output}</span>`
    } else {
      this.el.innerHTML = output
    }
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  "Are you in love with yourself?",
  "Do beaurit now!"
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 900)
  })
  counter = (counter + 1) % phrases.length
}

next()