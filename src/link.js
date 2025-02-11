import React from "react";

const GitHubLink = () => {
  return (
    <a
      href="https://github.com/ivanivanmontes/knuffle-bunny"
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
    >
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" // GitHub logo
        alt="GitHub Repo"
        className="github-logo"
      />
    </a>
  );
};

export default GitHubLink;
