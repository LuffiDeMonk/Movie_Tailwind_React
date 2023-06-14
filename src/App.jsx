import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Explore from "./pages/Explore";
import "react-lazy-load-image-component/src/effects/blur.css";
import ScrollToTop from "./components/ScrollToTop";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type/:id" element={<Details />} />
        <Route path="/search/:searchTerm" element={<Search />} />
        <Route path="/explore/:media_type" element={<Explore />} />
      </Routes>
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
