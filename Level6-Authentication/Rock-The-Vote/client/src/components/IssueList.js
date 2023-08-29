// import React from "react";
// import Issue from "./Issue.js";
// import { UserContext } from "../context/UserProvider.js";
// import { useContext } from "react";

// export default function IssueList(props) {
//   const { issues } = props;
//   const { deletedIssue, editIssue } = useContext(UserContext);
//   // console.log("issues");
//   // console.log(issues);
//   return (
//     <div className="issue-list">
//       {issues.map((issue) => (
//         <>
//           {/* {console.log(`inside of issueList Map`, issue)} */}
//           <Issue
//             {...issue}
//             deletedIssue={deletedIssue}
//             key={issue._id}
//             editIssue={editIssue}
//           />
//         </>
//       ))}
//     </div>
//   );
// }

import React from "react";
import Issue from "./Issue.js";
import { UserContext } from "../context/UserProvider.js";
import { useContext } from "react";

export default function IssueList(props) {
  const { issues } = props;
  const { deletedIssue, editIssue } = useContext(UserContext);

  // Sort the issues by upvotes (likes) in descending order
  const sortedIssues = [...issues].sort(
    (a, b) => b.likes.length - a.likes.length
  );
  console.log(issues);
  return (
    <div className="issue-list">
      {sortedIssues.map((issue) => (
        <Issue
          {...issue}
          deletedIssue={deletedIssue}
          key={issue._id}
          editIssue={editIssue}
        />
      ))}
    </div>
  );
}
