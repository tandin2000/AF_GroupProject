exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.editorBoard = (req, res) => {
    res.status(200).send("Editor Content.");
  };

  exports.reviewerBoard = (req, res) => {
    res.status(200).send("Reviewer Content.");
  };

  exports.researcherBoard = (req, res) => {
    res.status(200).send("ResearcherRegistration Content.");
  };