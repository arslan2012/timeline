import * as React from 'react'
import {
  BufferGeometry,
  Color,
  DoubleSide,
  FontLoader,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Path,
  PerspectiveCamera,
  Scene,
  ShapeBufferGeometry,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as TypefaceJson from '../../fonts/helvetiker_regular.typeface.json'

export class Home extends React.Component<{}, never> {
  camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    10000
  )
  scene = new Scene()
  renderer = new WebGLRenderer({ antialias: true })
  canvas: HTMLDivElement | null | undefined

  componentDidMount() {
    document.title = 'Timeline'
    this.init()
    this.animate()
  }

  init() {
    this.camera.position.set(0, -400, 600)
    this.scene.background = new Color(0xf0f0f0)
    const font = new FontLoader().parse(TypefaceJson)
    const color = 0x006699

    const matDark = new LineBasicMaterial({
      color,
      side: DoubleSide,
    })

    const matLite = new MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.4,
      side: DoubleSide,
    })

    const message = '   Welcome to \narslan2012.tech'

    const shapes = font.generateShapes(message, 100)

    const geometry = new ShapeBufferGeometry(shapes)

    geometry.computeBoundingBox()

    const xMid =
      -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x)

    geometry.translate(xMid, 0, 0)

    // make shape ( N.B. edge view not visible )

    const text = new Mesh(geometry, matLite)
    text.position.z = -150
    this.scene.add(text)

    // make line shape ( N.B. edge view remains visible )
    const holeShapes: Path[] = []
    for (const shape of shapes) {
      if (shape.holes && shape.holes.length > 0) {
        holeShapes.push(...shape.holes)
      }
    }

    // @ts-ignore
    shapes.push(...holeShapes)

    const lineText = new Object3D()

    for (const shape of shapes) {
      const points = shape.getPoints()
      const geometry = new BufferGeometry().setFromPoints(points)
      geometry.translate(xMid, 0, 0)
      const lineMesh = new Line(geometry, matDark)
      lineText.add(lineMesh)
    }
    this.scene.add(lineText)

    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.canvas && this.canvas.appendChild(this.renderer.domElement)

    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    controls.target.set(0, 0, 0)
    controls.update()

    window.addEventListener(
      'resize',
      () => {
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(window.innerWidth, window.innerHeight)
      },
      false
    )
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    return <div ref={(ref) => (this.canvas = ref)} />
  }
}
