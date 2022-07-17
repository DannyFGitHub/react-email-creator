import React, { useRef } from "react";
import EmailEditor from "react-email-editor";

export const GUIEmailEditor = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    // console.log("onReady");
    let els = document.getElementsByClassName("blockbuilder-branding");
    els.forEach((el) => {
      el.style.display = "none";
    });
  };

  return (
    <div>
      <EmailEditor
        minHeight={"100vh"}
        ref={emailEditorRef}
        onLoad={onLoad}
        onReady={onReady}
      />
      <div className="flex flex-col">
        <button onClick={exportHtml} className="btn btn-primary btn-lg">
          Export HTML
        </button>
      </div>
    </div>
  );
};
