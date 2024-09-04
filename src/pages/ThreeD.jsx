import React, { useEffect } from "react";
import * as THREE from "three";

function ThreeD() {
  useEffect(() => {
    let scene, camera, renderer, starGeometry, stars;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 10;
    camera.position.x = Math.PI / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    starGeometry = new THREE.BufferGeometry();
    const starVertices = [];

    for (let i = 0; i < 10000; i++) {
      starVertices.push(
        Math.random() * 600 - 300,
        Math.random() * 600 - 300,
        Math.random() * 600 - 300
      );
    }

    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );

    let sprite = new THREE.TextureLoader().load("/star.png");
    let starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.7,
      map: sprite,
    });

    stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const animate = () => {
      const positions = starGeometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.1; // Adjust this value to change star speed
        if (positions[i + 1] < -200) {
          positions[i + 1] = 200;
        }
      }

      starGeometry.attributes.position.needsUpdate = true;
      stars.rotation.y += 0.002;
      stars.rotation.x = -1.5;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Clean up
      if (renderer) {
        renderer.dispose();
      }
      if (renderer.domElement && document.body.contains(renderer.domElement)) {
        document.body.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <></>;
}

export default ThreeD;
