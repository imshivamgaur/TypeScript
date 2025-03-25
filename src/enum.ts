const app = express();

enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  Error = 500,
}

app.get("/", (req, res) => {
  if (!req.query.userId) {
    res.status(ResponseStatus.NotFound).json({});
  }

  // and so on....
  res.json({});
});

app.get("/test", (req, res) => {
  if (!req.query.userId) {
    res.status(ResponseStatus.Error).json({});
  }

  res.json({});
});
