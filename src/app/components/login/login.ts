import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
selector: 'app-login',
templateUrl: './login.html',
styleUrl: './login.css'
})

export class Login implements AfterViewInit {

ngAfterViewInit(){

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementById('bg360')?.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(500,60,40);
geometry.scale(-1,1,1);

const texture = new THREE.TextureLoader().load(
'https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg'
);

const material = new THREE.MeshBasicMaterial({ map:texture });

const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

camera.position.set(0,0,0.1);

function animate(){
requestAnimationFrame(animate);
sphere.rotation.y += 0.0005;
renderer.render(scene,camera);
}

animate();

}

}