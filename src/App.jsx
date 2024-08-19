import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy, useState } from "react";
import Header from "./components/Header/Header";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const App = ({}) => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
