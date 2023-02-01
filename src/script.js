import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from "three";

const canvas = document.querySelector('canvas.webgl')
const sizes = {
    width: 800,
    height: 600
}

const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshBasicMaterial({color: 0xff0000})
const mesh = new Mesh(geometry, material)

const camera = new PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

const scene = new Scene();
scene.add(mesh)
scene.add(camera)

const renderer = new WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
