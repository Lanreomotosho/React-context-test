import React from "react";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <Navbar />
      <Booklist />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
