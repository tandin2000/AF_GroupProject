import React, { useState, useEffect } from "react";
import EditorPage from "../editor/editor"
import UserService from "../services/user.service";

const BoardEditor = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getEditorBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
      <element hidden>
            {content}  
      </element>
        <EditorPage />
      </header>
    </div>
  );
};

export default BoardEditor;
