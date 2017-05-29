const yoffset = window.innerHeight/10
class ListContainer {
    constructor() {
        this.div = document.createElement('div')
        this.ul = document.createElement('ul')
        const w = window.innerWidth/3
        this.maxH = window.innerHeight/2
        this.h = 0
        this.div.style.width = w
        this.div.style.height = yoffset
        this.dir = 0
        this.div.style.background = '#3F51B5'
        this.whiteDiv = document.createElement('div')
        this.whiteDiv.style.background = '#EEEEEE'
        this.whiteDiv.style.width = w
        this.whiteDiv.style.left = this.div.style.left = window.innerWidth-w-w/20
    }
    add(text) {

    }
    show() {
      this.div.style.position = 'absolute'
      this.whiteDiv.style.position = 'absolute'
      this.div.style.top = window.innerHeight-(this.h+yoffset)
      this.whiteDiv.style.top = window.innerHeight-(this.h)
      this.whiteDiv.style.height = 0
      document.body.appendChild(this.div)
      document.body.appendChild(this.whiteDiv)
      //this.div.appendChild('ul')
      setInterval(()=>{
          this.update()
      },75)
      this.div.onmousedown = (event) => {
          if(this.dir == 0) {
              if(this.h <= 0) {
                  this.dir = 1
              }
              else {
                  this.dir = -1
              }
          }
          console.log(this.dir)
      }
    }
    update() {
        this.h += this.dir *(this.maxH)/4
        this.div.style.top = window.innerHeight-(this.h+yoffset)
        this.whiteDiv.style.top = parseFloat(this.div.style.top)+yoffset
        if(this.h >= this.maxH) {
            this.dir = 0
            this.h = this.maxH
        }
        else if(this.h<=0) {
            this.dir = 0
            this.h = 0
        }
        this.whiteDiv.style.height = this.h

    }
}
