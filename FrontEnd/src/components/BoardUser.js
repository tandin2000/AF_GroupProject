import React, { useState, useEffect } from "react";
import WorkshopCreate from "../workShop/createWorkShop";
import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
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

      <WorkshopCreate />
      </header>
    </div>
  );
};

export default BoardUser;
