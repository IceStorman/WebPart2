import express, { Request, Response } from "express";
import cors from "cors";
import {aboutMe, educations, hobbies, jobs, languages, references, skills} from './api/data/data';
import {Education} from './api/dtos/dtos';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/aboutMe", (req: Request, res: Response) => {
  res.json(aboutMe);
});

app.get("/educations", (req: Request, res: Response) => {
  res.json(educations);
});

app.post("/createEducation", (req: Request, res: Response) => {
  const newEducation: Education = req.body;
  educations.push(newEducation);
  res.status(200).json(newEducation);
})

app.get("/jobs", (req: Request, res: Response) => {
  res.json(jobs);
});

app.get("/references", (req: Request, res: Response) => {
  res.json(references);
});

app.get("/skills", (req: Request, res: Response) => {
  res.json(skills);
});

app.get("/languages", (req: Request, res: Response) => {
  res.json(languages);
});

app.get("/hobbies", (req: Request, res: Response) => {
  res.json(hobbies);
});

const PORT = 4001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
