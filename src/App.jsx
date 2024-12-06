import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Registro";

import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";


import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <AuthProvider>

        <BrowserRouter>
          <div className="flex h-screen">
            {/* Sidebar estático */}


            {/* Contenido principal */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Navbar estático */}
              <Navbar />

              {/* Contenido desplazable con todo el ancho y centrado */}
              <main className="flex-1 custom-scrollbar flex justify-center px-10 w-full py-20 ">
                <div className="w-full max-w-8xl"> {/* Limitar el ancho máximo para centrar el contenido */}
                  <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/contact" element={<RegisterPage />} />


                  </Routes>
                  <br />
                  <br />
                </div>
              </main>
            </div>
          </div>
        </BrowserRouter>

      </AuthProvider>
    </>
  );
}

export default App;