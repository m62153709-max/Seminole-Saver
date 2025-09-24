import { ImageResponse } from "next/og";
import { headers } from "next/headers";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  // Build absolute base from request headers
  const h = headers();
  const host = h.get("host") || "localhost:3000";
  const protocol = host.startsWith("localhost") ? "http" : "https";
  const base = `${protocol}://${host}`;

  const piggyUrl = `${base}/piggy.png`; // /public/piggy.png

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #782F40 0%, #CEB888 100%)",
          color: "white",
          fontSize: 72,
          fontWeight: 800,
        }}
      >
        <img
          src={piggyUrl}
          alt="Seminole Saver Piggy Logo"
          width="200"
          height="200"
          style={{ marginBottom: 32 }}
        />
        <div style={{ fontSize: 80, lineHeight: 1, textAlign: "center" }}>
          Seminole Saver
        </div>
        <div style={{ marginTop: 12, fontSize: 40, opacity: 0.95, textAlign: "center" }}>
          Save Smarter at FSU
        </div>
      </div>
    ),
    size
  );
}
