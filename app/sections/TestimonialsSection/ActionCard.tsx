import * as React from "react";

interface ActionCardProps {
  variant: "light" | "dark";
  imageSrc: string;
  text: string;
  backgroundImage?: string;
  multiline?: boolean;
}

export function ActionCard({
  variant,
  imageSrc,
  text,
  backgroundImage,
  multiline,
}: ActionCardProps) {
  const baseStyles =
    "flex overflow-hidden flex-col self-stretch my-auto rounded-2xl md:w-[218px] w-full";
  const variantStyles =
    variant === "light"
      ? "bg-zinc-100 text-stone-950"
      : "bg-green-950 text-white items-center aspect-square";

  return (
    <article className={`${baseStyles} ${variantStyles}`}>
      {backgroundImage && (
        <div className="flex relative flex-col px-4 py-5 aspect-[1.005] w-full">
          <img
            src={backgroundImage}
            alt=""
            className="object-cover absolute inset-0 size-full"
          />

          <div className="absolute top-1 right-1">
            {variant === "light" ? (
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_411_950)">
                  <path
                    d="M17.84 14.6666V16.3333H23.3317L13.6733 25.9916L14.8483 27.1666L24.5067 17.5083V23H26.1733V14.6666H17.84Z"
                    fill="#0F0F0F"
                  />
                  <rect
                    x="0.839844"
                    y="1"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="#0F0F0F"
                    strokeOpacity="0.65"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_411_950">
                    <rect
                      x="0.339844"
                      y="0.5"
                      width="40"
                      height="40"
                      rx="20"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_411_956)">
                  <path
                    d="M18.1901 14.9966V16.6632H23.6818L14.0234 26.3216L15.1984 27.4966L24.8568 17.8382V23.3299H26.5234V14.9966H18.1901Z"
                    fill="white"
                  />
                  <rect
                    x="1.18994"
                    y="1.32996"
                    width="39"
                    height="39"
                    rx="19.5"
                    stroke="white"
                    strokeOpacity="0.8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_411_956">
                    <rect
                      x="0.689941"
                      y="0.829956"
                      width="40"
                      height="40"
                      rx="20"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            )}
          </div>

          <p className="absolute bottom-1">
            {multiline
              ? text.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    {i === 2 ? <br /> : " "}
                  </React.Fragment>
                ))
              : text}
          </p>
        </div>
      )}
    </article>
  );
}
