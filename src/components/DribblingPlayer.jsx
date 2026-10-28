import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function DribblingPlayer() {
  const containerRef = useRef(null);
  const [dribbleCount, setDribbleCount] = useState(0);
  const [speech, setSpeech] = useState("Thinking in GOAT mode 🐐");

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    const width = container.clientWidth || 320;
    const height = container.clientHeight || 360;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 4.2);
    camera.lookAt(0, 0.9, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x14b8a6, 2.2);
    dirLight.position.set(3, 6, 4);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    backLight.position.set(-3, 3, -3);
    scene.add(backLight);

    // Pitch Ground Circle
    const groundGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.05, 32);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0f141c,
      roughness: 0.8,
      metalness: 0.2,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.025;
    ground.receiveShadow = true;
    scene.add(ground);

    // Ground Ring Outline
    const ringGeo = new THREE.RingGeometry(1.5, 1.55, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    scene.add(ring);

    // ==========================================
    // 3D FOOTBALL PLAYER MODEL HIERARCHY
    // ==========================================
    const playerGroup = new THREE.Group();
    scene.add(playerGroup);

    // Materials
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xe0ac69, roughness: 0.6 });
    const jerseyMat = new THREE.MeshStandardMaterial({
      color: 0x0d9488, // Phosphor Teal Jersey
      roughness: 0.5,
    });
    const stripeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9, // White stripes
      roughness: 0.5,
    });
    const shortsMat = new THREE.MeshStandardMaterial({
      color: 0x0a0e14, // Obsidian shorts
      roughness: 0.7,
    });
    const sockMat = new THREE.MeshStandardMaterial({
      color: 0x14b8a6,
      roughness: 0.6,
    });
    const bootMat = new THREE.MeshStandardMaterial({
      color: 0x2dd4bf,
      roughness: 0.3,
      metalness: 0.4,
    });
    const hairMat = new THREE.MeshStandardMaterial({
      color: 0x1e1b18,
      roughness: 0.9,
    });

    // Torso
    const torsoGeo = new THREE.BoxGeometry(0.48, 0.56, 0.26);
    const torso = new THREE.Mesh(torsoGeo, jerseyMat);
    torso.position.y = 1.08;
    torso.castShadow = true;
    playerGroup.add(torso);

    // Jersey vertical white stripes
    const stripe1Geo = new THREE.BoxGeometry(0.1, 0.565, 0.265);
    const stripe1 = new THREE.Mesh(stripe1Geo, stripeMat);
    stripe1.position.y = 1.08;
    playerGroup.add(stripe1);

    // Neck & Head
    const headGeo = new THREE.SphereGeometry(0.18, 16, 16);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 1.5;
    head.castShadow = true;
    playerGroup.add(head);

    // Hair
    const hairGeo = new THREE.SphereGeometry(0.19, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = 1.52;
    playerGroup.add(hair);

    // Pelvis / Shorts
    const hipsGeo = new THREE.BoxGeometry(0.46, 0.22, 0.25);
    const hips = new THREE.Mesh(hipsGeo, shortsMat);
    hips.position.y = 0.76;
    hips.castShadow = true;
    playerGroup.add(hips);

    // --- LEGS ---
    // Left Leg Group
    const leftLegGroup = new THREE.Group();
    leftLegGroup.position.set(-0.14, 0.68, 0);
    playerGroup.add(leftLegGroup);

    const leftThighGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.32, 12);
    const leftThigh = new THREE.Mesh(leftThighGeo, skinMat);
    leftThigh.position.y = -0.16;
    leftLegGroup.add(leftThigh);

    const leftCalfGeo = new THREE.CylinderGeometry(0.065, 0.06, 0.32, 12);
    const leftCalf = new THREE.Mesh(leftCalfGeo, sockMat);
    leftCalf.position.y = -0.42;
    leftLegGroup.add(leftCalf);

    const leftBootGeo = new THREE.BoxGeometry(0.1, 0.09, 0.22);
    const leftBoot = new THREE.Mesh(leftBootGeo, bootMat);
    leftBoot.position.set(0, -0.58, 0.05);
    leftLegGroup.add(leftBoot);

    // Right Leg Group (Kicking / Dribbling Leg)
    const rightLegGroup = new THREE.Group();
    rightLegGroup.position.set(0.14, 0.68, 0);
    playerGroup.add(rightLegGroup);

    const rightThighGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.32, 12);
    const rightThigh = new THREE.Mesh(rightThighGeo, skinMat);
    rightThigh.position.y = -0.16;
    rightLegGroup.add(rightThigh);

    const rightCalfGeo = new THREE.CylinderGeometry(0.065, 0.06, 0.32, 12);
    const rightCalf = new THREE.Mesh(rightCalfGeo, sockMat);
    rightCalf.position.y = -0.42;
    rightLegGroup.add(rightCalf);

    const rightBootGeo = new THREE.BoxGeometry(0.1, 0.09, 0.22);
    const rightBoot = new THREE.Mesh(rightBootGeo, bootMat);
    rightBoot.position.set(0, -0.58, 0.05);
    rightLegGroup.add(rightBoot);

    // --- ARMS ---
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.3, 1.28, 0);
    playerGroup.add(leftArmGroup);

    const leftArmGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.42, 12);
    const leftArm = new THREE.Mesh(leftArmGeo, skinMat);
    leftArm.position.y = -0.21;
    leftArmGroup.add(leftArm);

    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.3, 1.28, 0);
    playerGroup.add(rightArmGroup);

    const rightArmGeo = new THREE.CylinderGeometry(0.06, 0.05, 0.42, 12);
    const rightArm = new THREE.Mesh(rightArmGeo, skinMat);
    rightArm.position.y = -0.21;
    rightArmGroup.add(rightArm);

    // ==========================================
    // 3D SOCCER BALL
    // ==========================================
    const ballRadius = 0.14;
    const ballGeo = new THREE.DodecahedronGeometry(ballRadius, 2);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.3,
      metalness: 0.1,
    });
    const ball = new THREE.Mesh(ballGeo, ballMat);
    ball.position.set(0.2, ballRadius, 0.65);
    ball.castShadow = true;
    scene.add(ball);

    // Ball pentagon pattern rings
    const ballDecalGeo = new THREE.DodecahedronGeometry(ballRadius * 1.005, 1);
    const ballDecalMat = new THREE.MeshBasicMaterial({
      color: 0x0f766e,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const ballDecal = new THREE.Mesh(ballDecalGeo, ballDecalMat);
    ball.add(ballDecal);

    // Ball shadow
    const shadowGeo = new THREE.CircleGeometry(0.18, 16);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.4,
    });
    const ballShadow = new THREE.Mesh(shadowGeo, shadowMat);
    ballShadow.rotation.x = -Math.PI / 2;
    ballShadow.position.y = 0.005;
    scene.add(ballShadow);

    // ==========================================
    // INTERACTION & ANIMATION LOOP
    // ==========================================
    let clock = new THREE.Clock();
    let mouse = { x: 0, y: 0 };
    let ballVelocity = { x: 0, z: 0 };
    let kickTime = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };

    container.addEventListener("mousemove", onMouseMove);

    // Click to kick ball
    const kickBall = () => {
      kickTime = 1.0;
      setDribbleCount((prev) => prev + 1);

      const phrases = [
        "GOAT mode touch! 🐐",
        "Clean skill move! ⚡",
        "What a touch! ⚽",
        "Dribbling through! 🔥",
        "Engineering precision! 🎯",
      ];
      setSpeech(phrases[Math.floor(Math.random() * phrases.length)]);

      // Ball impulse
      ballVelocity.x = (Math.random() - 0.5) * 0.08;
      ballVelocity.z = 0.09;
    };

    container.addEventListener("click", kickBall);

    // Listen to scroll to update speech bubble like mananthakkar.dev
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 400) {
        setSpeech("Thinking in GOAT mode 🐐");
      } else if (scrollY < 1200) {
        setSpeech("Here’s my story 📖");
      } else if (scrollY < 2200) {
        setSpeech("A few career moves… 💼");
      } else if (scrollY < 3500) {
        setSpeech("Some things I've built… 🛠️");
      } else {
        setSpeech("Let's connect 🤝");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const speed = 4.2;

      // Running / Dribbling Leg cycles
      if (kickTime > 0) {
        // Kicking motion with right leg
        rightLegGroup.rotation.x = -Math.sin(kickTime * Math.PI) * 0.9;
        leftLegGroup.rotation.x = Math.sin(kickTime * Math.PI) * 0.3;
        kickTime -= 0.05;
      } else {
        // Natural rhythm dribble
        rightLegGroup.rotation.x = Math.sin(elapsedTime * speed) * 0.45;
        leftLegGroup.rotation.x = -Math.sin(elapsedTime * speed) * 0.45;
      }

      // Arm counter-swings
      leftArmGroup.rotation.x = Math.sin(elapsedTime * speed) * 0.35;
      rightArmGroup.rotation.x = -Math.sin(elapsedTime * speed) * 0.35;

      // Torso slight bobbing & tilt towards mouse
      playerGroup.position.y = Math.sin(elapsedTime * speed * 2) * 0.03;
      playerGroup.rotation.y = THREE.MathUtils.lerp(
        playerGroup.rotation.y,
        mouse.x * 0.4,
        0.08
      );

      // Ball Dribble Physics
      ball.position.x += ballVelocity.x;
      ball.position.z += ballVelocity.z;

      // Dribble back towards player when ball gets too far
      if (ball.position.z > 0.85) {
        ballVelocity.z = -0.04;
      } else if (ball.position.z < 0.45) {
        ballVelocity.z = 0.035;
      }

      // Boundary damping
      if (Math.abs(ball.position.x) > 0.6) {
        ballVelocity.x *= -0.7;
      }
      ballVelocity.x *= 0.98;

      // Ball rotational rolling
      ball.rotation.x += ballVelocity.z * 4.5;
      ball.rotation.z -= ballVelocity.x * 4.5;

      // Sync shadow
      ballShadow.position.x = ball.position.x;
      ballShadow.position.z = ball.position.z;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 320;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("click", kickBall);
      cancelAnimationFrame(animationId);
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      {/* Dynamic Speech Bubble matching mananthakkar.dev */}
      <div className="mb-2 z-20 transition-all duration-300 transform hover:scale-105">
        <div className="relative bg-ink-2/95 border border-teal/40 shadow-[0_0_15px_rgba(20,184,166,0.25)] text-paper px-4 py-2 rounded-xl font-mono text-xs flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal animate-ping" />
          <span className="font-medium text-paper">{speech}</span>
          <div
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-ink-2 border-b border-r border-teal/40 transform rotate-45"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-72 sm:w-80 h-80 sm:h-96 cursor-pointer relative select-none"
        title="Click to dribble and kick the ball!"
      >
        {/* Click to kick hint */}
        <div className="absolute bottom-2 inset-x-0 text-center font-mono text-[10px] text-paper-dim tracking-wider uppercase pointer-events-none opacity-80">
          <span>Click to kick ⚽</span>
          {dribbleCount > 0 && (
            <span className="text-teal font-semibold ml-2">
              Touches: {dribbleCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
