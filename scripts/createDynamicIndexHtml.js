// const fs = require("fs");
// const Markdoc = require("@markdoc/markdoc");
// const readmeMd = fs.readFileSync("./README.md", "utf8");

// const ast = Markdoc.parse(readmeMd);
// const content = Markdoc.transform(ast);
// const markdownhtml = Markdoc.renderers.html(content);

// const html = `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Readme Stats Github</title>
//     <style>
//       @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;300;400;500;600&display=swap");
//       body {
//         font-family: "IBM Plex Sans", sans-serif;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="markdown">${markdownhtml}</div>
//   </body>
// </html>
// `;

// fs.writeFileSync("./src/index.html", html);
