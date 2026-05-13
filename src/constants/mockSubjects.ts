import { subject } from "../types/index";

export const mockSubjects: subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Foundational concepts in computing, problem solving, and programming with an emphasis on algorithms and software design.",
    createdAt: "2026-05-13T00:00:00.000Z",
  },
  {
    id: 2,
    code: "ENG201",
    name: "Academic Writing and Research",
    department: "English",
    description:
      "Develops advanced writing skills, research methods, and critical analysis for academic essays and reports.",
    createdAt: "2026-05-13T00:00:00.000Z",
  },
  {
    id: 3,
    code: "MATH230",
    name: "Linear Algebra",
    department: "Mathematics",
    description:
      "Covers vector spaces, matrix operations, eigenvalues, and linear transformations used across science and engineering.",
    createdAt: "2026-05-13T00:00:00.000Z",
  },
];
