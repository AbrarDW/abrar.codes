"use client";

import Particles from "./magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function BGParticles() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "light" ? "#000000" : "#ffffff");
  }, [theme]);

  return (
    <div className="flex">
      <Particles
        className="fixed inset-0"
        quantity={300}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
