import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const StarryBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create stars (unchanged)
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
    });
    const starVertices = [];
    const starColors = [];
    for (let i = 0; i < 10000; i++) {
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      starVertices.push(x, y, z);

      const r = Math.random();
      const g = Math.random();
      const b = Math.random();
      starColors.push(r, g, b);
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    starGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(starColors, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Create shooting star trails
    const trailCount = 5;
    const trailPoints = 50;
    const trails = [];

    // Function to create a new trail
    const createTrail = () => {
      const trailGeometry = new THREE.BufferGeometry();
      const trailPositions = new Float32Array(trailPoints * 3);
      const trailColors = new Float32Array(trailPoints * 3);

      // Initialize the trail at a random position
      trailPositions[0] = Math.random() * window.innerWidth;
      trailPositions[1] = Math.random() * window.innerHeight;
      trailPositions[2] = 0;

      // Calculate the distance between the starting and ending points
      const distance = Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
      );

      // Calculate the step size for each trail point
      const stepSize = distance / (trailPoints - 1);

      // Interpolate the positions based on the step size
      for (let j = 1; j < trailPoints * 3; j += 3) {
        const t = j / (trailPoints * 3);
        trailPositions[j] =
          window.innerWidth -
          t *
            stepSize *
            Math.cos(Math.atan2(window.innerHeight, window.innerWidth));
        trailPositions[j + 1] =
          window.innerHeight -
          t *
            stepSize *
            Math.sin(Math.atan2(window.innerHeight, window.innerWidth));
        trailPositions[j + 2] = 0;
      }

      trailGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(trailPositions, 3)
      );
      trailGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(trailColors, 3)
      );

      const trailMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
      });

      const trail = new THREE.Line(trailGeometry, trailMaterial);
      scene.add(trail);
      trails.push({
        line: trail,
        velocity: new THREE.Vector3(-1, -1, 0).normalize().multiplyScalar(5),
        active: true,
      });
    };

    // Create initial trails
    for (let i = 0; i < trailCount; i++) {
      createTrail();
    }

    // Camera positioning
    camera.position.z = 1000;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the stars for a dynamic effect
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0001;

      // Update star colors for twinkling effect
      const colors = stars.geometry.attributes.color.array;
      for (let i = 0; i < colors.length; i += 3) {
        colors[i] *= 0.95 + Math.random() * 0.05;
        colors[i + 1] *= 0.95 + Math.random() * 0.05;
        colors[i + 2] *= 0.95 + Math.random() * 0.05;
      }
      stars.geometry.attributes.color.needsUpdate = true;

      // Update shooting star trails
      trails.forEach((trail) => {
        if (trail.active) {
          const positions = trail.line.geometry.attributes.position.array;
          const colors = trail.line.geometry.attributes.color.array;

          // Update the head of the trail
          const newX = positions[0] + trail.velocity.x;
          const newY = positions[1] + trail.velocity.y;
          const newZ = positions[2] + trail.velocity.z;

          // Interpolate the positions between the current head and the new position
          for (let i = positions.length - 1; i >= 3; i -= 3) {
            const t = i / (trailPoints * 3);
            positions[i] = positions[i - 3] * (1 - t) + newX * t;
            positions[i - 1] = positions[i - 4] * (1 - t) + newY * t;
            positions[i - 2] = positions[i - 5] * (1 - t) + newZ * t;

            colors[i] = colors[i - 3];
            colors[i - 1] = colors[i - 4];
            colors[i - 2] = colors[i - 5];
          }

          // Check if the trail has reached the end
          if (
            positions[0] < -1000 ||
            positions[1] < -1000 ||
            positions[2] < -1000
          ) {
            trail.active = false;
            // Create a new trail if there are fewer than 2 active trails
            if (trails.filter((t) => t.active).length < 2) {
              createTrail();
            }
          }

          trail.line.geometry.attributes.position.needsUpdate = true;
          trail.line.geometry.attributes.color.needsUpdate = true;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default StarryBackground;
