# Canvas Boilerplate

## Commands

Create a new repository on GitHub and execute the following lines.

```sh
git clone https://github.com/mc100s/canvas-boilerplate project1
cd project1
rm -rf .git
git init
git add .
git commit -m "First commit"
git remote add origin https://the-link-of-your-github-repository.git 
git push -u origin master
```

## Summary

```js
// The code here is not going to work, it's just some notes

// Init of canvas and ctx
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// Simple rectangle shapes
ctx.fillRect(x, y, width, height); // Draw a rectangle
ctx.strokeRect(x, y, width, height); // Draw the border of a rectangle
ctx.clearRect(x, y, width, height); // Clear a rectangle

// Complex shape
ctx.beginPath(); // To start a new shape (always at the beginning)
ctx.moveTo(x, y); // To move the pen to a specific point
ctx.lineTo(x, y); // To make a line to a specific point
ctx.arc(x, y, radius, startAngleInRadians, endAngleInRadians, antiClockwise); // To make an arc
ctx.closePath(); // To close the path (optional)
ctx.fill(); // To fill the shape
ctx.stroke(); // To draw the border of the shape

// To draw a circle where the center is (x,y) and the radius is radius
ctx.beginPath();
ctx.arc(x, y, radius, 0, 2 * Math.PI);
ctx.fill();

// Image
let img = new Image();
img.src = "link/to/the/image";
img.onload = () => {
  ctx.drawImage(img, x, y, width, height);
};

// Text
ctx.fillText("Your Text", x, y);

// To change ctx properties
ctx.fillStyle = "yourColor"; // Change the fill color
ctx.strokeStyle = "yourColor"; // Change the border color
ctx.lineWidth = 42; // Change the line width
ctx.globalAlpha = 0.5; // Change the transparency (between 0 and 1)
ctx.font = "42px Arial"; // Change the font size and font family
ctx.textAlign = "center"; // Change the text alignment
```

## Screenshot

![](https://i.imgur.com/AAuhRGL.png)
