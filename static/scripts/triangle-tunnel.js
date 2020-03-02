/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const triShapes = []

let shape
let maxTriShapesize
let canvasWidth
let canvasHeight

function setup() {
  canvasWidth = windowWidth
  canvasHeight = windowHeight

  const canvas = createCanvas(canvasWidth, canvasHeight)
  canvas.parent('canvas')

  angleMode(DEGREES)
  frameRate(30)
  background(255, 255, 255)

  noFill()
  strokeWeight(15)
  stroke(200)

  maxTriShapesize = calcTriangleHeight()
  shape = TriShape.generateShape(maxTriShapesize)

  background(0)

  for (let i = 0; i < 25; i++) {
    triShapes.push(new TriShape((1 / 25) * i, shape))
    triShapes[i].render()
  }
}

function draw() {
  background(0)

  let scaleAdder = (0.001 / canvasHeight) * mouseY + 0.0015
  let rotationMultiplier = (48 / canvasWidth) * mouseX - 24

  if (rotationX !== null && rotationX !== 0) {
    scaleAdder = 0.0025 - (0.005 / 360) * rotationX
    rotationMultiplier = rotationY
  }

  for (let i = 0; i < triShapes.length; i++) {
    if (triShapes[i].scale > 1) {
      triShapes.splice(i, 1)
      triShapes.unshift(new TriShape(0, shape))
    }

    triShapes[i].scale += scaleAdder
    triShapes[i].rotation = rotationMultiplier * triShapes[i].scale

    triShapes[i].render()
  }
}

function calcTriangleHeight() {
  const aspectRatio = windowWidth / windowHeight
  const triangleRatio = (1 / (aspectRatio - 0.13)) * 0.64 + 1.26

  return (triangleRatio * windowWidth) / 1.4
}
