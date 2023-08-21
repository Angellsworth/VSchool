import React from "react";
import Issue from "./Issue.js";
import { UserContext } from "../context/UserProvider.js";
import { useContext } from "react";

export default function IssueList(props) {
  const { issues } = props;
  const { deletedIssue, editIssue } = useContext(UserContext);
  // console.log("issues");
  // console.log(issues);
  return (
    <div className="issue-list">
      {issues.map((issue) => (
        <>
          {console.log(`inside of issueList Map`, issue)}
          <Issue
            {...issue}
            deletedIssue={deletedIssue}
            key={issue._id}
            editIssue={editIssue}
          />
        </>
      ))}
    </div>
  );
}
