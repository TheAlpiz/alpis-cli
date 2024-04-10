import { ProjectLayout } from "../types";

const defaultFiles = [
  {
    name: "index.ts",
    content: "",
  },
  {
    name: "example.ts",
    content: "",
  },
];

const folders: ProjectLayout = {
  app: {
    hasMultipleFolders: true,
    hasDefaultFiles: false,
    folders: [
      {
        hasDefaultFiles: true,
        name: "handlers",
        files: defaultFiles,
      },
      {
        hasDefaultFiles: true,
        name: "schemas",
        files: defaultFiles,
      },
      {
        hasDefaultFiles: true,
        name: "services",
        files: defaultFiles,
      },
      {
        hasDefaultFiles: true,
        name: "routes",
        files: defaultFiles,
      },
    ],
  },
  config: {
    hasMultipleFolders: false,
    hasDefaultFiles: true,
    files: [
      {
        name: "index.ts",
        content: "",
      },
      {
        name: "pino.config.ts",
        content: "",
      },
    ],
  },
  context: {
    hasMultipleFolders: false,
    hasDefaultFiles: false,
  },
  lib: {
    hasMultipleFolders: false,
    hasDefaultFiles: false,
  },
  middleware: {
    hasMultipleFolders: false,
    hasDefaultFiles: true,
    files: [
      {
        name: "registerer.middleware.ts",
        content: "",
      },
    ],
  },
};

const dependencies = [
  "fastify",
  "@fastify/cors",
  "@fastify/static",
  "pino-pretty",
  "dotenv",
  "zod",
  "fastify-zod",
];

const devDependencies = ["@types/node", "typescript", "ts-node", "nodemon"];

export { folders, dependencies, devDependencies };
