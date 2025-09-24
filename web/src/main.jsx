import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModalProvider } from "./hook/use-context"; // tanpa .jsx juga boleh
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from "./pages/product";
import AddProduct from "./pages/product/add";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit" element={<AddProduct />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </QueryClientProvider>
  </StrictMode>
);
