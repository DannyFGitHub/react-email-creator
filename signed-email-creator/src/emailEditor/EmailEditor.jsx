import React, { useRef } from "react";
import EmailEditor from "react-email-editor";

export const GUIEmailEditor = (props) => {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      props.setEmailHTML(html);
    });
  };

  const exportDesign = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      props.setDesign(design);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-end p-1">
        <button onClick={exportHtml} className="btn btn-primary btn-sm m-2">
          Export HTML
        </button>
        <button onClick={exportDesign} className="btn btn-primary btn-sm m-2">
          Export Design
        </button>
      </div>
      <div>
        <EmailEditor
          minHeight={"80vh"}
          appearance={{
            theme: "dark",
            panels: {
              tools: {
                dock: "left",
              },
            },
          }}
          ref={emailEditorRef}
          onLoad={onLoad}
          onReady={onReady}
        />
      </div>
    </div>
  );
};
