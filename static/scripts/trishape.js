/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

class TriShape {
  constructor(size, shape) {
    this.scale = size
    this.rotation = 0
    this.points = shape
  }

  render() {
    push()

    translate(windowWidth / 2, windowHeight / 2)
    rotate(this.rotation)
    scale(this.scale)

    beginShape()
    this.points.forEach((point) => {
      vertex(point.x, point.y)
    })
    endShape(CLOSE)

    pop()
  }

  static generateShape(maxSize) {
    const centerPoints = this.generateTriangle(maxSize * 0.75)
    const points = []

    centerPoints.forEach((point) => {
      const a = createVector(0, 0)
      const b = createVector(0, 0)

      a.x = point.x * cos(-15) - point.y * sin(-15)
      a.y = point.x * sin(-15) + point.y * cos(-15)

      b.x = point.x * cos(15) - point.y * sin(15)
      b.y = point.x * sin(15) + point.y * cos(15)

      points.push(a, b)
    })

    return points
  }

  static generateTriangle(maxSize) {
    const a = createVector(0, -maxSize)
    const b = createVector(0, 0)
    const c = createVector(0, 0)

    b.x = a.x * cos(120) - a.y * sin(120)
    b.y = a.x * sin(120) + a.y * cos(120)

    c.x = a.x * cos(240) - a.y * sin(240)
    c.y = a.x * sin(240) + a.y * cos(240)

    return [a, b, c]
  }
}
