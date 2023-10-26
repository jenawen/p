import { useState } from "react";
import { Parent } from "./components/Parent";
import { PrismaneProvider } from "@prismane/core";

function App() {
  return (
    <PrismaneProvider>
      <Parent />;
    </PrismaneProvider>
  );
}

export default App;
