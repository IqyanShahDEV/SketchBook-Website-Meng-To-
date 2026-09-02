import type { CSSProperties } from "react";

type TypographyProps = {
  headingFont?: string;
  bodyFont?: string;
  headingWeight?: string;
  bodyWeight?: string;
  primaryColor?: string;
  headingSize?: number;
  bodySize?: number;
  headingLetterSpacing?: number;
};

export function MengToSketchbookLandingPage({
  headingFont = "instrument-serif",
  bodyFont = "newsreader",
  headingWeight = "400",
  bodyWeight = "400",
  primaryColor = "#2b2721",
  headingSize = 30,
  bodySize = 20,
  headingLetterSpacing = 0.010,
}: TypographyProps) {
  const style = {
    "--heading-font": headingFont,
    "--body-font": bodyFont,
    "--heading-weight": headingWeight,
    "--body-weight": bodyWeight,
    "--primary-color": primaryColor,
    "--heading-size": `${headingSize}px`,
    "--body-size": `${bodySize}px`,
    "--heading-letter-spacing": `${headingLetterSpacing}em`,
  } as CSSProperties;

  return (
    <main className="shader-frame" style={style}>
      <iframe
        title="Meng To - Singapore Sketchbook"
        src={`${import.meta.env.BASE_URL}landing-pages/meng-to-sketchbook.html`}
        loading="eager"
      />
    </main>
  );
}
