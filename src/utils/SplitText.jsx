"use client";

export default function SplitText({
  text = "",
  smallClass = "text-sm",
  mediumClass = "md:text-xl",
  largeClass = "lg:text-3xl",
  wrapperClass = "",
  wrapperStyle = {},
  charStyle = {},
}) {
  return (
    <span
      className={`split-text-wrapper ${wrapperClass}`}
      style={{
        display: "inline-flex",
        ...wrapperStyle,
      }}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`split-text-char ${smallClass} ${mediumClass} ${largeClass}`}
          style={{
            display: "inline-block",
            ...charStyle,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
