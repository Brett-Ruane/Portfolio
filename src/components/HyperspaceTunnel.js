import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const HyperspaceTunnel = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene and camera setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 0;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Star settings
    const stars = [];
    const starCount = 2000;
    const radius = 20;

    // Materials for stars
    const materialWhite = new THREE.LineBasicMaterial({ color: 0xffffff });
    const materialBlue = new THREE.LineBasicMaterial({ color: 0x00aaff });

    // Slow down stars: set a lower velocity range
    const minVelocity = 0.4;
    const maxVelocity = 1.75;

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const r = radius * Math.sqrt(Math.random());
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);
      const z = Math.random() * -500;

      // Create a small line segment for each star
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, y, z),
        new THREE.Vector3(x, y, z + 2),
      ]);

      const material = Math.random() > 0.5 ? materialWhite : materialBlue;
      const line = new THREE.Line(geometry, material);

      // Assign a slower velocity to each star
      stars.push({
        line,
        velocity: minVelocity + Math.random() * (maxVelocity - minVelocity),
      });
      scene.add(line);
    }

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      for (const star of stars) {
        const positions = star.line.geometry.attributes.position.array;
        // Update the z positions of both vertices in the line
        positions[2] += star.velocity;
        positions[5] += star.velocity;

        // When a star moves out of view, reposition it far away
        if (positions[2] > 5) {
          const angle = Math.random() * 2 * Math.PI;
          const r = radius * Math.sqrt(Math.random());
          const x = r * Math.cos(angle);
          const y = r * Math.sin(angle);
          const z = -500;
          positions[0] = x;
          positions[1] = y;
          positions[2] = z;
          positions[3] = x;
          positions[4] = y;
          positions[5] = z + 2;
        }

        // Mark the attribute as needing update
        star.line.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Update camera and renderer when the window is resized.
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 19,
      }}
    />
  );
};

export default HyperspaceTunnel;
