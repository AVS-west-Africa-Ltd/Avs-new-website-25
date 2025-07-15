import React, { useState } from "react";

const ZoomableModal = ({
  imageSrc,
  onClose,
}: {
  imageSrc: string;
  onClose: () => void;
}) => {
  const [scale, setScale] = useState(1);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 3));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setScale(1);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={imageSrc}
          alt="Zoomable"
          className="transition-transform duration-300 max-w-full max-h-full object-contain"
          style={{ transform: `scale(${scale})` }}
        />

        {/* Zoom Controls */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          <button onClick={zoomOut} className="bg-white px-3 py-1 rounded text-black text-lg">−</button>
          <button onClick={resetZoom} className="bg-white px-3 py-1 rounded text-black text-sm">Reset</button>
          <button onClick={zoomIn} className="bg-white px-3 py-1 rounded text-black text-lg">+</button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 rounded-full px-3 py-1 text-xl"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ZoomableModal;
