#!/usr/bin/node

class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // Create an empty object when width or height is invalid
      Object.create(null);
    }
  }
}

module.exports = Rectangle;
