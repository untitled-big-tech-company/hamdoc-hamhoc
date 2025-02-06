import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import File from "./app/File";
import Home from "./app/Home";
import Input from "./app/Input";
import { Sample } from "./app/Sample";
import { ThemeProvider } from "./components/theme-provider";
import "./main.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="hamdoc-hamhoc-settings">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read/lang-le-sa-pa" element={<Sample />} />
          <Route path="/read/input" element={<Input />} />
          <Route path="/read/file" element={<File />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
