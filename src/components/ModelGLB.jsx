import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import '../style/ModelGLB.css';

function ModelViewer({ modelUrl }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 0.5;
    camera.position.y = 0.5;
    camera.position.x = 0.5;
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    let model;

    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      function (gltf) {
        model = gltf.scene;
        scene.add(model);
        animateModel();
      },
      undefined,
      function (error) {
        console.error('An error occurred loading the GLB model:', error);
      }
    );

    const controls = new OrbitControls(camera, canvas);
    controls.rotateSpeed = 0.5;

    function animateModel() {
      const speed = 0.01;

      const animate = function () {
        requestAnimationFrame(animate);

        if (model) {
          model.rotation.y += speed;
        }

        renderer.render(scene, camera);
        controls.update();
      };

      animate();
    }

    return () => {
      renderer.dispose();
      controls.dispose();
    };
  }, [modelUrl]);

  return (
    <canvas ref={canvasRef} />
  );
};

export default ModelViewer;
