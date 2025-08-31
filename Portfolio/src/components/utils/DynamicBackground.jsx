import { useEffect, useRef } from "react";

const DynamicBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (darkMode) {
      // Dark mode - Stars and meteors background
      const stars = [];
      const starCount = 200;
      const meteors = [];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
          originalOpacity: Math.random() * 0.7 + 0.3,
        });
      }

      // Create occasional meteors
      const createMeteor = () => {
        if (Math.random() < 0.02 && meteors.length < 5) {
          meteors.push({
            x: Math.random() * canvas.width,
            y: 0,
            speed: Math.random() * 15 + 10,
            length: Math.random() * 30 + 20,
            angle: Math.random() * 0.5 + 0.2,
            opacity: 1,
            fading: false,
          });
        }
      };

      const drawStars = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw a subtle dark gradient for the sky
        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          canvas.width * 0.8
        );
        gradient.addColorStop(0, "rgba(15, 23, 42, 0.8)");
        gradient.addColorStop(1, "rgba(2, 6, 23, 0.9)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw stars
        stars.forEach((star) => {
          // Twinkling effect
          star.opacity += star.twinkleSpeed * star.twinkleDirection;
          if (
            star.opacity > star.originalOpacity + 0.3 ||
            star.opacity < star.originalOpacity - 0.3
          ) {
            star.twinkleDirection *= -1;
          }

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();

          // Move stars
          star.x -= star.speed;

          // Reset star when it moves off screen
          if (star.x < 0) {
            star.x = canvas.width;
            star.y = Math.random() * canvas.height;
          }
        });

        // Create new meteors occasionally
        createMeteor();

        // Draw and update meteors
        for (let i = meteors.length - 1; i >= 0; i--) {
          const meteor = meteors[i];

          ctx.beginPath();
          ctx.moveTo(meteor.x, meteor.y);
          ctx.lineTo(
            meteor.x - meteor.length * Math.cos(meteor.angle),
            meteor.y + meteor.length * Math.sin(meteor.angle)
          );
          ctx.strokeStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
          ctx.lineWidth = 2;
          ctx.stroke();

          // Add a glowing head to the meteor
          ctx.beginPath();
          ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
          ctx.fill();

          // Move meteor
          meteor.x -= meteor.speed * Math.cos(meteor.angle);
          meteor.y += meteor.speed * Math.sin(meteor.angle);

          // Fade out meteor
          if (meteor.fading) {
            meteor.opacity -= 0.05;
            if (meteor.opacity <= 0) {
              meteors.splice(i, 1);
            }
          }
          // Start fading when meteor is near the bottom
          else if (meteor.y > canvas.height * 0.7) {
            meteor.fading = true;
          }

          // Remove meteor if it goes off screen
          if (meteor.x < 0 || meteor.y > canvas.height) {
            meteors.splice(i, 1);
          }
        }

        animationFrameId = requestAnimationFrame(drawStars);
      };

      drawStars();
    } else {
      // Light mode - Clouds and subtle particles
      const clouds = [];
      const cloudCount = 6;
      const particles = [];
      const particleCount = 50;

      for (let i = 0; i < cloudCount; i++) {
        clouds.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.6,
          radius: Math.random() * 40 + 30,
          speed: Math.random() * 0.4 + 0.2,
          opacity: Math.random() * 0.4 + 0.2,
        });
      }

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.3 + 0.1,
          direction: Math.random() > 0.5 ? 1 : -1,
        });
      }

      const drawLightBackground = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw sky gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, "#e0f2fe");
        gradient.addColorStop(1, "#bae6fd");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw subtle particles (like dust in the air)
        particles.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 200, 255, ${particle.opacity})`;
          ctx.fill();

          // Move particles slowly
          particle.x += particle.speed * particle.direction;

          // Reset particles when they move off screen
          if (particle.x > canvas.width || particle.x < 0) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
          }
        });

        // Draw clouds
        clouds.forEach((cloud) => {
          // Draw fluffy cloud with multiple circles
          ctx.beginPath();
          ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
          ctx.arc(
            cloud.x + cloud.radius * 0.8,
            cloud.y - cloud.radius * 0.5,
            cloud.radius * 0.7,
            0,
            Math.PI * 2
          );
          ctx.arc(
            cloud.x + cloud.radius * 1.5,
            cloud.y,
            cloud.radius * 0.8,
            0,
            Math.PI * 2
          );
          ctx.arc(
            cloud.x + cloud.radius * 0.8,
            cloud.y + cloud.radius * 0.5,
            cloud.radius * 0.7,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`;
          ctx.fill();

          // Move clouds
          cloud.x += cloud.speed;

          // Reset cloud when it moves off screen
          if (cloud.x > canvas.width + cloud.radius * 2) {
            cloud.x = -cloud.radius * 2;
            cloud.y = Math.random() * canvas.height * 0.6;
          }
        });

        animationFrameId = requestAnimationFrame(drawLightBackground);
      };

      drawLightBackground();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
};
export default DynamicBackground