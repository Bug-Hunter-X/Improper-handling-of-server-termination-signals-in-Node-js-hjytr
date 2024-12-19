# Node.js Server Termination Handling Bug

This repository demonstrates a common bug in Node.js server applications: improper handling of termination signals.  The included `bug.js` file shows a server that doesn't gracefully shut down when receiving signals like `SIGINT` (Ctrl+C). This can lead to resource leaks and incomplete operations.

The `bugSolution.js` file provides a corrected version that demonstrates how to properly handle these signals and gracefully shut down the server.

## Steps to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Press Ctrl+C to interrupt the server.  Observe that the server exits abruptly without completing any cleanup tasks.
4. Run `node bugSolution.js`.
5. Press Ctrl+C to interrupt the server.  Observe that the server gracefully shuts down after handling all pending requests.