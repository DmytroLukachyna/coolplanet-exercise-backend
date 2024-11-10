import "dotenv/config";
import express from "express";
import { type Express, type Request, type Response } from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import type { UserData, UserName } from "./types/index.ts";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadUsersList = (): UserData[] => {
  const filePath = path.join(__dirname, "data/users.json");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data) as UserData[];
};

app.get("/", (req: Request, res: Response) => {
  res.send("Backend part of exercise for CoolPlanet");
});

app.get("/api/getUsers", (req: Request, res: Response) => {
  const users = loadUsersList();
  const result: UserName[] = users.map(({ id, first_name, last_name }) => ({
    id,
    first_name,
    last_name,
  }));
  res.json(result);
});

app.get("/api/getUser/:id", (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  const users = loadUsersList();
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "No user found" });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
