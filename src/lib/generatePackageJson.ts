import { PackageJson } from "../types";

export default function createPackageJson(
  packageJson: PackageJson,
  projectName: string
): PackageJson {
  const newPackageJson: PackageJson = {
    name: packageJson.name || projectName,
    version: packageJson.version || "1.0.0",
    description:
      packageJson.description || "A simple Fastify project with TypeScript",
    main: packageJson.main || "src/index.ts",
    keywords: packageJson.keywords || "",
    scripts: {
      start: "nodemon src/index.ts",
    },
    author: packageJson.author || "",
    license: packageJson.license || "MIT",
    dependencies: {},
    devDependencies: {},
  };

  return newPackageJson;
}
