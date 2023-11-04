import express from "express";
import passport from "passport";
import cors from "cors";
import JWT from "jsonwebtoken";
import "dotenv/config";

import { passportStrategy } from "./authorization";
import { getRecipes, getRecipesCount } from "./db/recipes";

const app = express();
const port = process.env.PORT || 3000;
const whitelistUrl = process.env.CLIENT_URL;

const whitelist = [
  "http://localhost:4173",
  "http://localhost:5173",
  whitelistUrl,
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

const secretKey = process.env.JWT_SECRET || "deeeel";

app.get("/createToken", (_req, res) => {
  const token = JWT.sign({ key: "Delutaaa is the best cook :)" }, secretKey);
  res.send(token);
});

app.get(
  "/recipes",
  passport.authenticate(passportStrategy, { session: false }),
  async (_req, res) => {
    const recipes = await getRecipes();
    res.send(recipes);
  }
);
app.get(
  "/recipesCount",
  passport.authenticate(passportStrategy, { session: false }),
  async (_req, res) => {
    const recipesCount = await getRecipesCount();
    res.send({ recipesCount });
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
