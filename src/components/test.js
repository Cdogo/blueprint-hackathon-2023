import React, { useRef, useState } from "react";

export default function IframeWithMousePosition(path) {
  const iframeRef = useRef(null);
  const [mousePosition, setMousePosition] = useState(null);

  function handleClick(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get the position of the iFrame relative to the page
    const { x: iframeX, y: iframeY } = iframeRef.current.getBoundingClientRect();

    // Calculate the mouse position relative to the iFrame
    const iframeMouseX = mouseX - iframeX;
    const iframeMouseY = mouseY - iframeY;

    // Set the mouse position in state
    setMousePosition({ x: iframeMouseX, y: iframeMouseY });
  }

  return (
    <div>
      <iframe ref={iframeRef} src={path} onClick={handleClick} />
      {mousePosition && (
        <p>Mouse position inside iFrame: {mousePosition.x}, {mousePosition.y}</p>
      )}
    </div>
  );
}