import React, { useContext, useEffect } from "react";
import IssueForm from "./IssueForm.js";
import IssueList from "./IssueList.js";
// import Issue from "./Issue.js";
import { UserContext } from "../context/UserProvider.js";

export default function Profile() {
  const {
    user: { username, _id },
    addIssue,
    issues,
    getUserIssues,
  } = useContext(UserContext);

  useEffect(() => {
    getUserIssues();
  }, []);

  return (
    <div className="profile">
      <h1>Welcome {username}!</h1>
      <h3>Post a new Issue</h3>
      <br />
      <IssueForm submit={addIssue} btnText="Add Issue" />
      <br />
      <h3>Posted Issues</h3>
      <IssueList issues={issues} />
    </div>
  );
}
