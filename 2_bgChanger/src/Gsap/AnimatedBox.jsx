import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedBox = () => {
  const boxRef = useRef(null); // Reference to the DOM element

  useEffect(() => {
    gsap.to(boxRef.current, { 
      x: 200, // Move 200px to the right
      duration: 1, 
      opacity: 1, 
      ease: "power2.out" 
    });
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: "blue",
        marginTop: "50px",
        opacity: 0, // Start with opacity 0
      }}
    />
  );
};

export default AnimatedBox;
