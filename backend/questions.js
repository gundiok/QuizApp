const questions = [
  // --- JavaScript: Easy ---
  {
    question: "What keyword declares a variable that cannot be reassigned?",
    options: ["let", "const", "var", "static"],
    correctAnswer: "const",
  },
  {
    question: "What does '===' check for that '==' does not?",
    options: ["Nothing, they're identical", "Type", "Value only", "Scope"],
    correctAnswer: "Type",
  },
  {
    question: "What data type is returned by typeof []?",
    options: ["array", "object", "list", "undefined"],
    correctAnswer: "object",
  },
  {
    question: "Which method adds an item to the end of an array?",
    options: ["push", "pop", "shift", "unshift"],
    correctAnswer: "push",
  },
  {
    question: "What does NaN stand for?",
    options: [
      "Not a Number",
      "Null and Nothing",
      "New Array Node",
      "Number and Null",
    ],
    correctAnswer: "Not a Number",
  },

  // --- JavaScript: Intermediate ---
  {
    question: "What does the spread operator (...) do when copying an array?",
    options: [
      "Creates a deep clone always",
      "Creates a shallow copy",
      "Sorts the array",
      "Reverses the array",
    ],
    correctAnswer: "Creates a shallow copy",
  },
  {
    question: "What will 'typeof null' return?",
    options: ["null", "undefined", "object", "number"],
    correctAnswer: "object",
  },
  {
    question: "Which array method does NOT mutate the original array?",
    options: ["push", "splice", "map", "sort"],
    correctAnswer: "map",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A loop that never ends",
      "A function with access to its outer scope",
      "A method to close a file",
      "An error type",
    ],
    correctAnswer: "A function with access to its outer scope",
  },
  {
    question: "What does Array.prototype.find() return if no match is found?",
    options: ["null", "-1", "undefined", "an empty array"],
    correctAnswer: "undefined",
  },
  {
    question: "What is the output of 0.1 + 0.2 === 0.3?",
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "false",
  },
  {
    question: "Which keyword creates block-scoped variables?",
    options: ["var", "let", "function", "global"],
    correctAnswer: "let",
  },

  // --- JavaScript: Difficult ---
  {
    question: "What is the difference between call() and apply()?",
    options: [
      "No difference",
      "apply() takes arguments as an array",
      "call() is async",
      "apply() cannot set 'this'",
    ],
    correctAnswer: "apply() takes arguments as an array",
  },
  {
    question: "What does the 'this' keyword refer to inside an arrow function?",
    options: [
      "The global object always",
      "Its own new binding",
      "The enclosing lexical scope's 'this'",
      "undefined always",
    ],
    correctAnswer: "The enclosing lexical scope's 'this'",
  },
  {
    question: "What is event bubbling?",
    options: [
      "Events firing in random order",
      "An event propagating from child to parent elements",
      "A memory leak pattern",
      "A way to cancel events",
    ],
    correctAnswer: "An event propagating from child to parent elements",
  },
  {
    question: "What does Object.freeze() do?",
    options: [
      "Deletes an object",
      "Prevents adding, removing, or changing properties",
      "Converts object to JSON",
      "Pauses execution",
    ],
    correctAnswer: "Prevents adding, removing, or changing properties",
  },
  {
    question: "What is a microtask in the JS event loop?",
    options: [
      "A setTimeout callback",
      "A Promise callback, runs before next macrotask",
      "A DOM event handler",
      "A synchronous function",
    ],
    correctAnswer: "A Promise callback, runs before next macrotask",
  },

  // --- JavaScript: Expert ---
  {
    question:
      "What is the difference between structuredClone() and JSON.parse(JSON.stringify(obj))?",
    options: [
      "No difference",
      "structuredClone handles more types like Dates and Maps correctly",
      "JSON method is faster always",
      "structuredClone mutates the original",
    ],
    correctAnswer:
      "structuredClone handles more types like Dates and Maps correctly",
  },
  {
    question: "What does the WeakMap object allow that a regular Map does not?",
    options: [
      "String-only keys",
      "Garbage collection of unreferenced keys",
      "Faster iteration",
      "Nested maps",
    ],
    correctAnswer: "Garbage collection of unreferenced keys",
  },
  {
    question:
      "In what order does the JS engine execute: sync code, microtasks, macrotasks?",
    options: [
      "Macrotasks, sync, microtasks",
      "Sync, microtasks, macrotasks",
      "Microtasks, macrotasks, sync",
      "All simultaneously",
    ],
    correctAnswer: "Sync, microtasks, macrotasks",
  },
  {
    question: "What does Symbol.iterator enable an object to do?",
    options: [
      "Be stringified",
      "Be used with for...of loops",
      "Be frozen",
      "Be compared with ==",
    ],
    correctAnswer: "Be used with for...of loops",
  },

  // --- Node.js: Easy ---
  {
    question: "What command initializes a new Node.js project?",
    options: ["npm init", "node start", "npm new", "node create"],
    correctAnswer: "npm init",
  },
  {
    question: "Which module system does Node.js use by default in .js files?",
    options: ["ES Modules", "CommonJS", "AMD", "UMD"],
    correctAnswer: "CommonJS",
  },
  {
    question: "What function starts an Express server listening on a port?",
    options: ["app.start()", "app.run()", "app.listen()", "app.serve()"],
    correctAnswer: "app.listen()",
  },
  {
    question: "What keyword exports a value in CommonJS?",
    options: ["export", "module.exports", "return", "public"],
    correctAnswer: "module.exports",
  },
  {
    question: "What is npm short for?",
    options: [
      "Node Package Manager",
      "New Programming Method",
      "Node Program Module",
      "Network Package Mode",
    ],
    correctAnswer: "Node Package Manager",
  },

  // --- Node.js: Intermediate ---
  {
    question: "What does middleware in Express do?",
    options: [
      "Styles the frontend",
      "Runs code between the request and response",
      "Compiles JS",
      "Manages databases only",
    ],
    correctAnswer: "Runs code between the request and response",
  },
  {
    question: "What does the 'next' function do in Express middleware?",
    options: [
      "Ends the request",
      "Passes control to the next middleware",
      "Restarts the server",
      "Deletes the request",
    ],
    correctAnswer: "Passes control to the next middleware",
  },
  {
    question: "Which file lists a Node project's dependencies?",
    options: ["index.js", "package.json", "node.config", ".env"],
    correctAnswer: "package.json",
  },
  {
    question: "What does 'req.params' contain in an Express route?",
    options: [
      "Query string values",
      "URL path parameters",
      "Request headers",
      "The response body",
    ],
    correctAnswer: "URL path parameters",
  },
  {
    question: "What does cors() middleware solve?",
    options: [
      "Database errors",
      "Cross-origin request restrictions",
      "Slow queries",
      "Memory leaks",
    ],
    correctAnswer: "Cross-origin request restrictions",
  },
  {
    question: "What HTTP status code typically means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    correctAnswer: "404",
  },

  // --- Node.js: Difficult ---
  {
    question: "What is the Node.js event loop responsible for?",
    options: [
      "Compiling JS to machine code",
      "Handling async operations without blocking",
      "Managing CSS",
      "Rendering HTML",
    ],
    correctAnswer: "Handling async operations without blocking",
  },
  {
    question: "What does process.env provide access to?",
    options: [
      "The file system",
      "Environment variables",
      "Installed npm packages",
      "The current URL",
    ],
    correctAnswer: "Environment variables",
  },
  {
    question: "What is a common reason to use streams in Node.js?",
    options: [
      "To style components",
      "To process large data without loading it all into memory",
      "To write CSS",
      "To manage routes",
    ],
    correctAnswer: "To process large data without loading it all into memory",
  },
  {
    question:
      "What does mongoose's runValidators option do on update operations?",
    options: [
      "Deletes invalid documents",
      "Runs schema validation during findByIdAndUpdate-type calls",
      "Validates only on save()",
      "Disables validation",
    ],
    correctAnswer: "Runs schema validation during findByIdAndUpdate-type calls",
  },
  {
    question: "What's the purpose of a .env file combined with dotenv?",
    options: [
      "Store frontend styles",
      "Load environment variables into process.env",
      "Compile TypeScript",
      "Cache API responses",
    ],
    correctAnswer: "Load environment variables into process.env",
  },

  // --- Node.js: Expert ---
  {
    question: "What does libuv provide to Node.js?",
    options: [
      "The V8 engine",
      "The event loop and async I/O",
      "The HTTP module only",
      "TypeScript support",
    ],
    correctAnswer: "The event loop and async I/O",
  },
  {
    question:
      "What's a key difference between cluster and worker_threads in Node.js?",
    options: [
      "No difference",
      "Cluster forks separate processes, worker_threads share memory",
      "worker_threads are always faster",
      "Cluster only works with Express",
    ],
    correctAnswer:
      "Cluster forks separate processes, worker_threads share memory",
  },
  {
    question: "What does the --inspect flag do when starting Node?",
    options: [
      "Enables debugging via Chrome DevTools",
      "Increases memory limit",
      "Enables strict mode",
      "Compresses output",
    ],
    correctAnswer: "Enables debugging via Chrome DevTools",
  },

  // --- React: Easy ---
  {
    question: "What hook is used to add state to a functional component?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    correctAnswer: "useState",
  },
  {
    question: "What syntax does React use to write HTML-like code in JS?",
    options: ["HTM", "JSX", "XML", "RSX"],
    correctAnswer: "JSX",
  },
  {
    question: "What prop must every item in a list rendered with .map() have?",
    options: ["id", "key", "index", "name"],
    correctAnswer: "key",
  },
  {
    question: "How do you pass data from a parent to a child component?",
    options: ["State", "Props", "Context only", "Redux only"],
    correctAnswer: "Props",
  },
  {
    question: "What function do you call to update state from useState?",
    options: [
      "The setter function returned alongside it",
      "render()",
      "update()",
      "refresh()",
    ],
    correctAnswer: "The setter function returned alongside it",
  },

  // --- React: Intermediate ---
  {
    question: "What does useEffect's empty dependency array [] mean?",
    options: [
      "Run on every render",
      "Run only once, after the first render",
      "Never run",
      "Run only on unmount",
    ],
    correctAnswer: "Run only once, after the first render",
  },
  {
    question: "Why shouldn't you mutate state directly in React?",
    options: [
      "It's slower",
      "React won't detect the change and re-render",
      "It causes syntax errors",
      "It's not allowed by JS itself",
    ],
    correctAnswer: "React won't detect the change and re-render",
  },
  {
    question: "What is 'lifting state up' in React?",
    options: [
      "Using Redux",
      "Moving shared state to a common parent component",
      "Using class components",
      "Caching state in localStorage",
    ],
    correctAnswer: "Moving shared state to a common parent component",
  },
  {
    question: "What does useRef primarily let you do that useState doesn't?",
    options: [
      "Trigger re-renders on change",
      "Persist a value across renders without causing a re-render",
      "Fetch data",
      "Style components",
    ],
    correctAnswer: "Persist a value across renders without causing a re-render",
  },
  {
    question:
      "What's the purpose of a cleanup function returned from useEffect?",
    options: [
      "To style the component",
      "To run logic before the effect re-runs or component unmounts",
      "To fetch initial data",
      "To handle click events",
    ],
    correctAnswer:
      "To run logic before the effect re-runs or component unmounts",
  },
  {
    question:
      "What does conditional rendering with && require to avoid rendering '0'?",
    options: [
      "Nothing, it's always safe",
      "The left side should not evaluate to a falsy number like 0",
      "Using || instead",
      "Wrapping in a ternary always",
    ],
    correctAnswer: "The left side should not evaluate to a falsy number like 0",
  },

  // --- React: Difficult ---
  {
    question:
      "What causes React's Strict Mode to double-invoke certain functions in development?",
    options: [
      "A bug in React",
      "Intentional behavior to help surface side-effect bugs",
      "Slow internet",
      "Outdated React version",
    ],
    correctAnswer: "Intentional behavior to help surface side-effect bugs",
  },
  {
    question: "What problem does useMemo primarily solve?",
    options: [
      "Avoiding unnecessary API calls",
      "Avoiding expensive recalculations on every render",
      "Managing routing",
      "Handling forms",
    ],
    correctAnswer: "Avoiding expensive recalculations on every render",
  },
  {
    question: "What is prop drilling?",
    options: [
      "A performance optimization",
      "Passing props through many nested components that don't need them",
      "A React error",
      "A CSS technique",
    ],
    correctAnswer:
      "Passing props through many nested components that don't need them",
  },
  {
    question: "What does React's reconciliation algorithm primarily determine?",
    options: [
      "Which CSS to apply",
      "What changed in the virtual DOM to minimize real DOM updates",
      "Which API to call",
      "Component naming",
    ],
    correctAnswer:
      "What changed in the virtual DOM to minimize real DOM updates",
  },
  {
    question: "Why might using an array index as a key cause bugs?",
    options: [
      "It's always slower",
      "It can cause incorrect state/UI matching when list order changes",
      "React forbids it entirely",
      "It breaks JSX syntax",
    ],
    correctAnswer:
      "It can cause incorrect state/UI matching when list order changes",
  },

  // --- React: Expert ---
  {
    question:
      "What is the main benefit of React's concurrent rendering features?",
    options: [
      "Smaller bundle size",
      "Ability to interrupt and prioritize rendering work",
      "Automatic SEO",
      "Built-in CSS support",
    ],
    correctAnswer: "Ability to interrupt and prioritize rendering work",
  },
  {
    question: "What does React.memo primarily optimize?",
    options: [
      "Initial load time",
      "Skipping re-renders when props haven't changed",
      "Bundle size",
      "SEO ranking",
    ],
    correctAnswer: "Skipping re-renders when props haven't changed",
  },
  {
    question: "What's a key difference between useLayoutEffect and useEffect?",
    options: [
      "No real difference",
      "useLayoutEffect runs synchronously before the browser paints",
      "useEffect is deprecated",
      "useLayoutEffect only works in class components",
    ],
    correctAnswer:
      "useLayoutEffect runs synchronously before the browser paints",
  },
];

module.exports = questions;
