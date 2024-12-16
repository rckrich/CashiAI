import { createRoot } from "react-dom/client";
import { createElement } from "react";
import { App } from "./app.component";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./font.css";
const element = document.getElementById("root")!;
const root = createRoot(element);

root.render(createElement(App));
