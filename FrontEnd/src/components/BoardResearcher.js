import React, { useState, useEffect } from "react";
import ResearchRegistration from "../researcher/ResearchRegistration/researchRegistration";
import UserService from "../services/user.service";

const BoardResearcher = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getResearcherBoard().then(
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

      <ResearchRegistration />
      </header>
    </div>
  );
};

export default BoardResearcher;
