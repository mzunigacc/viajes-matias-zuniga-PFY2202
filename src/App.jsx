import { BrowserRouter, Route, Routes } from "react-router";

import Header from "./components/Header";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Destinations />} />
          <Route
            path="/destinos/:destinationId"
            element={<DestinationDetail />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
