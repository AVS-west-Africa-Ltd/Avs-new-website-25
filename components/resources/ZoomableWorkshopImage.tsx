import { useState } from 'react';
import Image from 'next/image';

export default function ZoomableWorkshopImage({
  imageSrc,
  imageAltSrc,
}: {
  imageSrc: string;
  imageAltSrc: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.1, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.1, 1));
  };

  const handleOpen = () => {
    setZoom(1); // reset zoom each time
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Thumbnail view */}
      <div
        className="cursor-zoom-in w-full h-auto mt-6 md:mt-8 bg-[#205352] rounded-2xl md:rounded-[45px] overflow-hidden flex flex-col items-center p-4 md:p-0"
        onClick={handleOpen}
      >
        <div className="relative w-full md:w-[1225px] h-auto md:h-[697px]">
          <Image
            className="w-full md:w-[984px] h-auto md:h-[621px] object-cover rounded-2xl md:rounded-[45px]"
            alt="Workshop Image"
            src={imageSrc}
            width={1225}
            height={697}
            priority
          />
          <Image
            className="w-full md:w-[686px] h-auto md:h-[433px] md:absolute md:top-[264px] md:left-[539px]"
            alt="Alt Image"
            src={imageAltSrc}
            width={686}
            height={433}
          />
        </div>
      </div>

      {/* Modal zoom view */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ×
          </button>

          <div className="flex gap-4 mb-4">
            <button
              onClick={handleZoomOut}
              className="bg-white text-black px-3 py-1 rounded"
            >
              −
            </button>
            <button
              onClick={handleZoomIn}
              className="bg-white text-black px-3 py-1 rounded"
            >
              +
            </button>
          </div>

          <div className="overflow-auto max-h-[80vh] max-w-full">
            <div
              className="transition-transform duration-300 inline-block"
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'center',
              }}
            >
              <div className="relative">
                <Image
                  className="rounded-2xl md:rounded-[45px]"
                  alt="Workshop Image"
                  src={imageSrc}
                  width={1225}
                  height={697}
                />
                <Image
                  className="absolute top-[264px] left-[539px] w-[686px] h-[433px]"
                  alt="Alt Image"
                  src={imageAltSrc}
                  width={686}
                  height={433}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
