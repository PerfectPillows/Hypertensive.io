import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./Components/Error";
import LandingPage from "./Components/LandingPage";
import SharedLayout from "./Components/SharedLayout";
import Loading from "./Components/Loading";

const LazyStats = React.lazy(() => import("./Components/Statistics")); //these are dynamic imports for lazy loading
const LazyReadings = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./Components/Readings")), 1000);
  });
});

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LandingPage />}></Route>

        <Route
          path="readings"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyReadings />
            </React.Suspense>
          }
        />
        <Route
          path="statistics"
          element={
            <React.Suspense fallback="Loading...">
              <LazyStats />
            </React.Suspense>
          }
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
