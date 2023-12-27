const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { basename } = require("path");
const { readFileSync } = require("fs");
const htmlParser = require("htmlparser2");

const app = express();

const scripts = [];
const barHTML = readFileSync("./dist/bar.html", "utf8");
const fragment = htmlParser.parseDocument(barHTML);
for (const script of htmlParser.DomUtils.getElementsByTagName(
  "script",
  fragment
)) {
  if (script.attribs.src) {
      if (script.attribs.type === "module") {
          scripts.push(basename(script.attribs.src));
      }
    }
}

app.use(function(req,res,next){
  if (req.originalUrl.endsWith(scripts[0])) {
    return setTimeout(next, 1000)
  }
  next();
});

app.use(express.static('dist'));

app.get("/", (req, res) => {
  const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
    <div id="root">Server rendered content</div>,
    {
      bootstrapModules: scripts,
      onShellReady() {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        pipe(res);
      },
      onShellError() {
        res.statusCode = 500;
        res.send("<!doctype html><p>Error!</p>");
      },
    }
  );
});

app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});