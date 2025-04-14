function setup(){
    createCanvas(windowWidth, windowHeight)
    background(0)
   
}

function draw () {
   

    translate(width/2, height/2)
        const d = min(width, height)*0.3
        const x = sin(frameCount*0.043)*width*0.4
        const y = sin(frameCount*0.039+ 0,4)*width*0.4


       // const r = map(cos(frameCount*0.051), -1,1,0,225)
       const r = noise(frameCount*0.051)*225
        const g = noise(frameCount*0.047)*225
        const b = noise(frameCount*0.04)*225

        noStroke()
        fill(r,g,b)

        ellipse (x,y,d)

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}