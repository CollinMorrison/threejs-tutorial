
//tutorial url: https://www.freecodecamp.org/news/three-js-tutorial/
//repo url: https://github.com/dubnuzz/threejs-tutorial


import * as THREE from "three"
const scene = new THREE.Scene()

//Setting up the ambient light, shines from every direction
const ampbientLight = new THREE.AmbientLight(0xffffff, 0.6)
scene.add(ambientLight)

//Setting up the directional light
// Out of all the parallel rays we define one in particular.
// This specific light ray will shine from the position we define (200,500,300) to the 0,0,0 coordinate.
// The rest will be in parallel to it.
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
directionalLight.position.set(200, 500, 300)
scene.add(directionalLight)

// Setting up the camera
const aspectRatio = window.innerWidth / window.innerHeight
const cameraWidth = 150
const cameraHeight = cameraWidth / aspectRatio

const camera = new THREE.OrthographicCamera(
    cameraWidth / -2, // left
    cameraWidth / 2, // right
    cameraHeight / 2, // top
    cameraHeight / -2, // bottom
    0, // new plane
    1000 // far plane
)
camera.position.set(200, 200, 200)
camera.lookAt(0, 10, 0)

// Set up renderer
const renderer = new THREE.WebGLRenderer({ andialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

document.body.appendChild(renderer.domElement)


function createWheels() {
    const geometry = new THREE.BoxBufferGeometry(12, 12, 33)
    const material = new THREE.MeshlambertMaterial({ color: 0x333333 })
    const wheel = new THREE.Mesh(geometry, material)
    return wheel
}