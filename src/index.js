import express from "express";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const PORT = process.env.PORT || 8080;
const app = express();

// middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

// health route
app.get("/health", (_, resp) => {
  resp.status(200).json({
    message: "Server is up and running",
  });
});

app.get("/users", async (req, resp) => {
  try {
    const { name, sort } = req.query;

    // handing  simple caching is not users then only fetch
    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    let users = response.data;

    if (name) {
      const filteredUsersByName = users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
      users = filteredUsersByName;
    }

    if (sort) {
      if (sort == "asc") {
        const sortedData = users.sort((a, b) => a.name.localeCompare(b.name));
        users = sortedData;
      } else if (sort == "desc") {
        const sortedData = users.sort((a, b) => b.name.localeCompare(a.name));
        users = sortedData;
      } else {
        console.log("sort is not provided");
      }
    }

    resp.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
});
