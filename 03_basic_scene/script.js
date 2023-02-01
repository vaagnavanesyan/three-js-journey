const canvas = document.querySelector('canvas.webgl')
const sizes = {
    width: 800,
    height: 600
}

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

const scene = new THREE.Scene();
scene.add(mesh)
scene.add(camera)

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
