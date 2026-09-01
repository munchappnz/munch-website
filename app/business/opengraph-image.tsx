import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Munch for Business — turn quiet hours into more customers.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function toDataUri(buffer: Buffer, mime: string) {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

export default async function Image() {
  const [poppinsRegular, poppinsBold, poppinsExtraBold, wordmarkBuffer] =
    await Promise.all([
      readFile(join(process.cwd(), "app", "fonts", "Poppins-Regular.ttf")),
      readFile(join(process.cwd(), "app", "fonts", "Poppins-Bold.ttf")),
      readFile(join(process.cwd(), "app", "fonts", "Poppins-ExtraBold.ttf")),
      readFile(join(process.cwd(), "public", "brand", "munch-wordmark.png")),
    ]);
  const wordmark = toDataUri(wordmarkBuffer, "image/png");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          fontFamily: "Poppins",
          backgroundColor: "#fbf8f6",
        }}
      >
        {/* Left: brand + headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1.5,
            padding: "0 72px",
          }}
        >
          <div style={{ display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={wordmark} width={150} height={50} alt="" />
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#fc4101",
            }}
          >
            Munch for Business
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#151515",
              maxWidth: 620,
            }}
          >
            Turn quiet hours into more customers.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 25,
              fontWeight: 400,
              lineHeight: 1.4,
              color: "#6b675f",
              maxWidth: 560,
            }}
          >
            Create recurring deals, choose when they run, and get
            discovered by nearby diners.
          </div>
        </div>

        {/* Right: deal accent panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "#fc4101",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 150,
              fontWeight: 800,
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            25%
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 4,
              fontSize: 38,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#ffffff",
            }}
          >
            OFF
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              padding: "12px 24px",
              borderRadius: 999,
              fontSize: 21,
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "rgba(255,255,255,0.16)",
            }}
          >
            Recurring deals, your way
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Poppins", data: poppinsRegular, weight: 400, style: "normal" },
        { name: "Poppins", data: poppinsBold, weight: 700, style: "normal" },
        {
          name: "Poppins",
          data: poppinsExtraBold,
          weight: 800,
          style: "normal",
        },
      ],
    },
  );
}
