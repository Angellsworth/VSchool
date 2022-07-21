
// An election was recently held and it's time to count the votes. Votes are
// counted in two stages:
//
//   1. Each voting district counts the votes in its district and ranks the
//      candidates by total number of votes in the district.
//   2. The top N candidates and their votes are reported to the central
//      authority, who determines the final results across all districts.
//
// The central authority either designates the winner of the election, or
// declares that it is impossible to determine a winner. Let's consider some
// examples for the central authority.
//
// Example 1: 2 districts, top N=2 candidates reported.
//   Inputs to the central authority:
//     District A:
//       1. Candidate a = 10 votes
//       2. Candidate b = 8 votes
//     District B:
//       1. Candidate b = 6 votes
//       2. Candidate c = 2 votes
//   Output: Candidate b is the winner!
//
// Example 2: 2 districts, top N=2 candidates reported.
//   Inputs to the central authority:
//     District A:
//       1. Candidate a = 10 votes
//       2. Candidate b = 8 votes
//     District B:
//       1. Candidate b = 6 votes
//       2. Candidate c = 5 votes
//       -- can't see below here ---
//       3. Candidate a = 0-5 votes
//   Output: Impossible to determine a winner.
//   Reason:
//     While Candidate b has 14 votes, it's possible that Candidate a has 15
//     votes (10 from District A and 5 from District B), and so Candidate a or
//     Candidate b could be the winner.
//
// The task is to implement the central authority algorithm and designate the
// winner of the election or declare that it is impossible to determine the
// winner.