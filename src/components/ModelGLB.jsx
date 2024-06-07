import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FiMaximize } from 'react-icons/fi';

import '../style/components/ModelGLB.css';

function ModelViewer({ modelUrl }) {
  const canvasRef = useRef();
  const containerRef = useRef();
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
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

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        window.location.reload();
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

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

    function handleResize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', handleResize);

    // Add fullscreen change event listeners
    document.addEventListener('fullscreenchange', handleResize);

    handleResize();

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      renderer.dispose();
      controls.dispose();
    };
  }, [modelUrl]);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        window.location.reload();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div ref={containerRef} className="model-container">
      <canvas ref={canvasRef} className="canvas" />
      <button className="fullscreen-button" onClick={toggleFullScreen}>
        <FiMaximize />
      </button>
    </div>
  );
}

export default ModelViewer;
