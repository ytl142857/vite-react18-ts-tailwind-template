import React, { useEffect, useRef } from 'react';

export const MyCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const cnv = canvasRef.current;
    const cxt = cnv.getContext('2d');
    if (!cxt) return;

    draw(cxt);
  }, []);

  const draw = (cxt: CanvasRenderingContext2D) => {
    cxt.translate(400, 400);

    cxt.beginPath();
    cxt.arc(0, 0, 100, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.closePath();

    cxt.beginPath();
    cxt.arc(0, 0, 5, 0, 2 * Math.PI);
    cxt.stroke();
    cxt.closePath();
  };

  return (
    <>
      <h2>canvas</h2>
      <div>
        <canvas
          ref={canvasRef}
          width="800"
          height="800"
          style={{ border: '1px solid #ccc' }}
        ></canvas>
      </div>
    </>
  );
};
