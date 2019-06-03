const TAU = Zdog.TAU;

let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  zoom: 10,
  dragRotate: true,
});

// body
new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -2 },
    { x:  2 },
  ],
  stroke: 20,
  color: '#FFFFFF'
});

// tail
new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -12, y: 2, z: -2 },
    { x:  0,  y: 0, z:  0 },
    { x: -12, y: 2, z:  2 },
    { x: -5,  y: 1, z:  0 }
  ],
  translate: { x: -10, y: 0, z: 0 },
  stroke: 2,
  color: '#585859',
  fill: true,
});

// head
new Zdog.Shape({
  addTo: illo,
  stroke: 18,
  translate: { x: 2, y: -5 },
  color: '#FFFFFF'
})

// eye
let eye = new Zdog.Shape({
  addTo: illo,
  stroke: 1.5,
  translate: { x: 9, y: -6, z: 3.5 },
  color: '#19171C'
});

eye.copy({
  translate: { x: 9, y: -6, z: -3.5 },
});

// beak
new Zdog.Cone({
  addTo: illo,
  diameter: 2,
  length: 2,
  translate: { x: 9, y: -4 },
  rotate: { y: TAU*3/4  },
  color: '#2D2D31'
})

// leg
let leg = new Zdog.Shape({
  addTo: illo,
  stroke: 0.5,
  path: [
    { x: -1,   y: -1, z: 0 },
    { x: 2,    y: 2,  z: 0 },
    { x: 4,    y: 2,  z: 0 },
    { x: 2,    y: 2,  z: 0 },
    { x: 4,    y: 2,  z: 2 },
    { x: 2,    y: 2,  z: 0 },
    { x: 4,    y: 2,  z: -2},
    { x: 2,    y: 2,  z: 0 },
    { x: -0.5, y: 2,  z: 0 },
    { x: 2,    y: 2,  z: 0 },
  ],
  translate: { x: 7, y: 7, z: 4 },
  color: '#000000'
});

leg.copy({
  translate: { x: 7, y: 7, z: -4 }
})

function animate() {
  illo.rotate.x += 0.03;
  illo.rotate.y += 0.03;
  illo.rotate.z += 0.05;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();