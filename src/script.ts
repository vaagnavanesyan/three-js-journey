import {
  AxesHelper,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  Scene,
  WebGLRenderer,
} from 'three';

const canvas = document.querySelector<HTMLCanvasElement>('canvas.webgl');

if (canvas) {
  const sizes = {
    width: 800,
    height: 600,
  };

  const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
  camera.position.z = 3;

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0xffff00 });
  const cube = new Mesh(geometry, material);
  cube.position.y = -1;

  const scene = new Scene();
  scene.add(cube);

  const axesHelper = new AxesHelper();
  scene.add(axesHelper);

  scene.add(camera);

  const renderer = new WebGLRenderer({
    canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.render(scene, camera);
}
