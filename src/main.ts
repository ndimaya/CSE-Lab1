import Konva from 'konva';

//create a stage
const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight
});

//create layer
const layer = new Konva.Layer();
stage.add(layer);

//create shape
const lemon = new Konva.Group({
    x: stage.width() / 2,
    y: stage.height() / 2,
    draggable: true
});

const ellipse1 = new Konva.Ellipse ({
    x: 0,
    y: 0,
    radiusX: 100,
    radiusY: 50,
    fill: 'yellow',
});
const ellipse2 = new Konva.Ellipse ({
    x: 100,
    y: 0,
    radiusX: 5,
    radiusY: 20,
    fill: 'yellow',
});
const ellipse3 = new Konva.Ellipse ({
    x: -100,
    y: 0,
    radiusX: 5,
    radiusY: 20,
    fill: 'yellow',
});


//add shape to group
lemon.add(ellipse1);
lemon.add(ellipse2);
lemon.add(ellipse3);

//add group to layer
layer.add(lemon);


//add layer to stage
stage.add(layer);


//mouseover stuff
lemon.on('pointerdown', ()=> {
lemon.to({scaleX: 1.2, scaleY:1.2});
});
lemon.on('pointerup', () => {
    lemon.to({scaleX: 1, scaleY: 1});
});
