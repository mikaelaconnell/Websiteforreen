import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Reen: Hormonal Health, Reimagined";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const abhayaBold = await readFile(
    join(process.cwd(), "src/app/og-fonts/AbhayaLibre-Bold.ttf")
  );
  const abhayaRegular = await readFile(
    join(process.cwd(), "src/app/og-fonts/AbhayaLibre-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#45101c",
          backgroundImage:
            "radial-gradient(circle at 50% 120%, #942143 0%, #45101c 65%)",
          fontFamily: "Abhaya Libre",
        }}
      >
        <div
          style={{
            fontSize: 44,
            color: "#fbf7ee",
            letterSpacing: "0.02em",
            marginBottom: 28,
          }}
        >
          reen
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#fbf7ee",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Hormonal health, reimagined.
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 28,
            color: "#fbf7ee",
            border: "1px solid rgba(251, 247, 238, 0.4)",
            borderRadius: 999,
            padding: "12px 32px",
          }}
        >
          Launching Fall 2026 on the App Store
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Abhaya Libre",
          data: abhayaBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Abhaya Libre",
          data: abhayaRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
