import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { version } from "./version.js";
import { useEffect } from "react";
import { GUIEmailEditor } from "./emailEditor/EmailEditor";
import { themeChange } from "theme-change";

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
        {/* <div className="self-center justify-center">
          {themes.map((theme, i) => {
            return (
              <button
                className="btn btn-primary"
                key={i}
                data-set-theme={theme}
                data-act-class="ACTIVECLASS"
              >
                {theme}
              </button>
            );
          })}
        </div> */}
        <div>
          <div className="flex flex-row justify-between">
            <div className="p-4">
              <h1 className="text-3xl font-bold self-center justify-center">
                Email Editor
              </h1>
            </div>
            <div className="flex flex-row items-center">
              <div className="label label-text align-middle">Light</div>
              <input
                type="checkbox"
                className="toggle toggle-lg"
                data-toggle-theme="dracula,cupcake"
                data-act-class="ACTIVECLASS"
                checked={toggle}
                onChange={() => {
                  setToggle(!toggle);
                }}
              />
              <div className="label label-text align-middle">Dark</div>
            </div>
          </div>
        </div>
        <GUIEmailEditor />
      </div>
    </div>
  );
}

export default App;
