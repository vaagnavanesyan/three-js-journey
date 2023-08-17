import {BoxGeometry, Group, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from "three";
import gsap from 'gsap'

const sizes = {
    width: 800,
    height: 600
};

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({color: 0xff0000});
const mesh = new Mesh(geometry, material);
mesh.position.set(3.7, 1.6, 0.6);
mesh.scale.set(2, 0.25, 0.5);

const camera = new PerspectiveCamera(100, sizes.width / sizes.height);
camera.position.set(1, 1, 3);

const group = new Group();
const cube1 = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({color: "orange"})
);
const cube2 = new Mesh(
    new BoxGeometry(1, 1.5, 1),
    new MeshBasicMaterial({color: "blue"})
);
cube2.position.x = -2;
const cube3 = new Mesh(
    new BoxGeometry(1, 1.5, 1),
    new MeshBasicMaterial({color: "lime"})
);
cube3.position.x = 2;
group.add(cube1);
group.add(cube2);
group.add(cube3)

const scene = new Scene();
scene.add(mesh);
scene.add(group);
scene.add(camera);

const canvas = document.querySelector("canvas.webgl");
const renderer = new WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

gsap.to(mesh.position, {x: 2, duration: 1, delay: 1.2})
const tick = () => {
    renderer.render(scene, camera);
    window.requestAnimationFrame(tick)
}

tick();
