import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: "linear-gradient(135deg, #6366f1 0%, #14b8a6 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <span
        style={{
          color: "#f8fafc",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "-0.5px",
          fontFamily: "sans-serif",
        }}>
        EO
      </span>
    </div>,
    { ...size },
  );
}
