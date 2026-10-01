import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export async function GET() {
  const icon = await readFile(join(process.cwd(), "public/logo-icon.png"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {/* Preserve the original 1000 × 900 icon's proportions on a square canvas. */}
        <img
          src={`data:image/png;base64,${icon.toString("base64")}`}
          alt=""
          width={512}
          height={460.8}
        />
      </div>
    ),
    { width: 512, height: 512 }
  );
}
