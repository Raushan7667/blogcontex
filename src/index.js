import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppContexProvider from "./contex/AppContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<AppContexProvider>
<App />
</AppContexProvider>
    
  
);
