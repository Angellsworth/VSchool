import React, { useContext, useEffect } from "react";
import IssueList from "./IssueList.js";
import Issue from "./Issue.js";
import { UserContext } from "../context/UserProvider.js";

export default function Public() {
  const {
    user: { username },
    getAllIssues,
    issues,
    allIssues,
    getAllComments,
  } = useContext(UserContext);

  useEffect(() => {
    getAllIssues();
    getAllComments();
  }, []);

  // console.log(allIssues);
  return (
    <div className="public">
      <h1>Home</h1>
      <IssueList issues={allIssues} />
    </div>
  );
}
