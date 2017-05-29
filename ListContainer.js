const yoffset = window.innerHeight/10
class ListContainer {
    constructor() {
        this.div = document.createElement('div')
        this.ul = document.createElement('ul')
        const w = window.innerWidth/3
        this.maxH = window.innerHeight/3
        this.h = 0
        this.div.style.width = w
        this.div.style.height = yoffset
        this.dir = 0
        this.div.style.background = '#3F51B5'
    }
    add(text) {

    }
    show() {
      this.div.style.position = 'absolute'
      this.div.style.top = window.innerHeight-(this.h+yoffset)
      document.body.appendChild(this.div)
      //this.div.appendChild('ul')
      setInterval(()=>{
          this.update()
      },100)
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
        if(this.h >= this.maxH) {
            this.dir = 0
            this.h = this.maxH
        }
        else if(this.h<=0) {
            this.dir = 0
            this.h = 0
        }
        this.div.style.height = this.h+yoffset

    }
}
