'use client';

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
}

interface Orb {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export default function UniverseBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    // Generate stars
    const generatedStars: Star[] = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }));
    setStars(generatedStars);

    // Generate 3D orbs
    const colors = ['#9f7aea', '#f43f5e', '#3b82f6', '#22c55e', '#facc15'];
    const generatedOrbs: Orb[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      top: Math.random() * 80,
      left: Math.random() * 80,
      size: Math.random() * 150 + 50,
      delay: Math.random() * 10,
      duration: Math.random() * 40 + 30,
      color: colors[i % colors.length],
    }));
    setOrbs(generatedOrbs);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-50 animate-pulse"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* 3D Glowing Orbs */}
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full opacity-30 animate-spin-slow"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            top: `${orb.top}%`,
            left: `${orb.left}%`,
            backgroundColor: orb.color,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate3d(1, 1, 0, 0deg);
          }
          100% {
            transform: rotate3d(1, 1, 0, 360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </div>
  );
}
