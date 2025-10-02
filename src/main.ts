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
    x: 0,
    y: 0,
    draggable: true
});

const ellipse1 = new Konva.Ellipse ({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radiusX: 100,
    radiusY: 50,
    fill: 'yellow',
});
const ellipse2 = new Konva.Ellipse ({
    x: stage.width() / 2 - 100,
    y: stage.height() / 2,
    radiusX: 5,
    radiusY: 20,
    fill: 'yellow',
});
const ellipse3 = new Konva.Ellipse ({
    x: stage.width() / 2 + 100,
    y: stage.height() / 2,
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

//abimation timings
const period = 2000;

const anim = new Konva.Animation(function(frame) {
const scale = Math.sin(frame.time * 2 * Math.PI / period) + 2;
lemon.scaleX(scale);
});
//mouseover stuff
lemon.on('pointerdown', ()=> {
anim.start();
});
lemon.on('pointerup', () => {
    anim.stop();
});
