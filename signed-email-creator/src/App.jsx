import { useState, useEffect } from "react";
import { version } from "./version.js";
import { GUIEmailEditor } from "./emailEditor/EmailEditor";
import { themeChange } from "theme-change";
import logo from "./assets/f7.svg";
import copy from "copy-to-clipboard";

function App() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log(version);
    themeChange();
  }, []);

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
  ];

  return (
    <div>
      <div className="flex flex-col">
        <div>
          <div className="flex flex-row justify-between">
            <div className="m-8">
              <h1 className="text-3xl font-bold self-center justify-center">
                Email Editor
              </h1>
            </div>
            <div className="flex flex-row items-center p-4">
              <div className="label label-text align-middle"></div>
              <img src={logo} className="w-14 h-14" />
            </div>
          </div>
        </div>
        <GUIEmailEditor
          setEmailHTML={(html) => {
            copy(html);
            alert("Copied HTML to clipboard");
          }}
          exportDesign={(design) => {
            copy(JSON.stringify(design));
            alert("Copied Design (Template) to clipboard");
          }}
        />
      </div>
    </div>
  );
}

export default App;
