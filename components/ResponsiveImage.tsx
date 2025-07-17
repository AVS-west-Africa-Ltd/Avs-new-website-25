import { useEffect, useState } from "react";
import Image from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt?: string;
};

export default function ResponsiveImage({ src, alt = "Slide" }: ResponsiveImageProps) {
  const [objectFit, setObjectFit] = useState<"cover" | "contain">("contain");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 540 && width <= 912)   
        {
        setObjectFit("cover"); // iPad Mini to Air 768
      } else {
        setObjectFit("contain"); // All others
      }
    };

    handleResize(); // set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="block lg:hidden relative w-full h-64 sm:h-80 md:h-96 mb-10">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit }}
      />
    </div>
  );
}
