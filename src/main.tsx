import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MengToSketchbookLandingPage } from "./shaders/landing-pages/MengToSketchbookLandingPage";
import "./app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MengToSketchbookLandingPage
      headingFont="instrument-serif"
      bodyFont="newsreader"
      headingWeight="400"
      bodyWeight="400"
      primaryColor="#2b2721"
      headingSize={30}
      bodySize={20}
      headingLetterSpacing={0.010}
    />
  </StrictMode>,
);
