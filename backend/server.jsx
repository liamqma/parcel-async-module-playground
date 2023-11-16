const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const app = express();

app.use(express.static('dist'));

app.use(function(req,res,next){
  if (req.originalUrl.endsWith("foo.84654a46.js")) {
    return setTimeout(next, 1000)
  }
  next();
});

app.get("/", (req, res) => {
  const entryPoint = ["foo.84654a46.js", "foo.72b22426.js"];

  const { pipe, abort: _abort } = ReactDOMServer.renderToPipeableStream(
    <div>Foo</div>,
    {
      bootstrapScripts: entryPoint,
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