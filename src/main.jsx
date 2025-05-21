import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { BrowserRouter, Routes } from "react-router";
import Login from "./pages/Login.jsx";
import { Route } from "react-router";
import { Toaster } from "sonner";
import Register from "./pages/Register.jsx";
import Homepage from "./pages/Homepage.jsx";
import AlertProvider from "./context/Alert.jsx";
import { PathProtect, TokenTest } from "./services/PathProtect.jsx";
import DirectHandler from "./hooks/Direct.jsx";
import Memorize from "./pages/Memorize.jsx";
import Instruction from "./pages/Instruction.jsx";
import Question from "./pages/Question.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { alertSlice, progressBarSlice } from "./redux/progressBar.js";
import Result from "./pages/Result.jsx";

const store = configureStore({
  reducer: {
    progressBar: progressBarSlice.reducer,
    alert: alertSlice.reducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AlertProvider>
        <BrowserRouter>
          <DirectHandler />
          <Toaster position="top-center" />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/users" element={<Register />}></Route>

            <Route path="/quiz" element={<PathProtect />}>
              <Route index element={<Homepage />}></Route>
              <Route path="result" element={<Result />}></Route>
            </Route>

            <Route path="/quiz" element={<TokenTest />}>
              <Route path="memorize" element={<Memorize />}></Route>
              <Route path="instruction" element={<Instruction />}></Route>
              <Route path="question/:id" element={<Question />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </Provider>
  </StrictMode>
);
