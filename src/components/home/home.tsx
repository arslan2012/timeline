import React from "react";
import {
  AmbientLight,
  CubeRefractionMapping,
  CubeTextureLoader,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereBufferGeometry,
  Vector3,
  WebGLRenderer,
} from "three";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";
import autobind from "../../util/autobound.decorator";

@autobind
export default class Home extends React.Component<{}, never> {
  camera = new PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    100000
  );
  scene = new Scene();
  renderer = new WebGLRenderer({ antialias: true });
  canvas: HTMLDivElement | null | undefined;
  pointLight = new PointLight(0xffffff, 2);
  mouseX = 0;
  mouseY = 0;

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  componentDidMount() {
    document.title = "Arslan2012";
    this.initCanvas();
    this.animateCanvas();
  }

  initCanvas() {
    if (!this.canvas) return;
    this.camera.position.z = -4000;

    const urls = [
      "img/px.jpg",
      "img/nx.jpg",
      "img/py.jpg",
      "img/ny.jpg",
      "img/pz.jpg",
      "img/nz.jpg",
    ];

    const textureCube = new CubeTextureLoader().load(urls);
    textureCube.mapping = CubeRefractionMapping;

    this.scene.background = textureCube;

    // LIGHTS

    const ambient = new AmbientLight(0xffffff);
    this.scene.add(ambient);

    this.scene.add(this.pointLight);

    // light representation

    const sphere = new SphereBufferGeometry(100, 16, 8);

    const mesh = new Mesh(sphere, new MeshBasicMaterial({ color: 0xffffff }));
    mesh.scale.set(0.05, 0.05, 0.05);
    this.pointLight.add(mesh);

    // material samples

    const cubeMaterial = new MeshPhongMaterial({
      color: 0xccddff,
      envMap: textureCube,
      refractionRatio: 0.98,
      reflectivity: 0.9,
    });

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvas.appendChild(this.renderer.domElement);

    const loader = new PLYLoader();
    loader.load("arslan.ply", (geometry) => {
      geometry.computeVertexNormals();

      const mesh = new Mesh(geometry, cubeMaterial);
      mesh.position.x = 1100;
      mesh.scale.x = mesh.scale.y = mesh.scale.z = 1500;
      mesh.rotateOnAxis(new Vector3(1, 0, 0), 4.5);
      mesh.rotateOnAxis(new Vector3(0, 0, 1), 3.5);
      this.scene.add(mesh);
    });

    window.addEventListener("resize", this.rerenderCanvas, false);
  }

  rerenderCanvas() {
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  canvasOnMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.mouseX = (event.clientX - this.windowHalfX) * 4;
    this.mouseY = (event.clientY - this.windowHalfY) * 4;
  }

  canvasOnTouchMove(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault(); // stop chrome from refreshing
    const touches = event.changedTouches;

    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i];
      this.mouseX = (touch.pageX - this.windowHalfX) * 4;
      this.mouseY = (touch.pageY - this.windowHalfY) * 4;
    }
  }

  animateCanvas() {
    requestAnimationFrame(this.animateCanvas);
    const timer = -0.0002 * Date.now();

    this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
    this.camera.position.y += (-this.mouseY - this.camera.position.y) * 0.05;

    this.camera.lookAt(this.scene.position);

    this.pointLight.position.x = 1500 * Math.cos(timer);
    this.pointLight.position.z = 1500 * Math.sin(timer);

    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        ref={(ref) => (this.canvas = ref)}
        style={{ display: "flex" }}
        onMouseMove={this.canvasOnMouseMove}
        onTouchMove={this.canvasOnTouchMove}
      />
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.rerenderCanvas, false);
  }
}
