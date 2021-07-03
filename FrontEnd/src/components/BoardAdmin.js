import React, { useState, useEffect } from "react";
import ViewResearcher from "../admin/research/viewResearches";
import UserService from "../services/user.service";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
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
      <element hidden>
            {content}  
      </element>

      <ViewResearcher />
    </div>
  );
};

export default BoardAdmin;
