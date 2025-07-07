import React from "react";
import PropTypes from "prop-types";

export default function Banner({
  items = [],
  direction = "horizontal", // "vertical"
  speed = 20, // pixels per second
  className = "",
}) {
  const animationDirection =
    direction === "horizontal" ? "animate-marquee-x" : "animate-marquee-y";

  const wrapperStyle =
    direction === "horizontal"
      ? "whitespace-nowrap flex gap-12"
      : "flex flex-col gap-6";

  return (
    <div
      className={`relative overflow-hidden w-full h-full ${className}`}
    >
      <div
        className={`${animationDirection} ${wrapperStyle} py-3 will-change-transform`}
        style={{
          animationDuration: `${items.length * speed}s`,
        }}
      >
        {items.concat(items).map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 text-base font-medium text-gray-800"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

Banner.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  speed: PropTypes.number,
  className: PropTypes.string,
};
