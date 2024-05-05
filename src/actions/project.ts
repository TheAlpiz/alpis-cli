import path from "path";
import fs from "fs";
import chalk from "chalk";
import { PackageJson } from "../types";
import { GetQuestions } from "../questions";
import createProjectLayout, { createFolderAndFiles } from "../lib/fs.actions";
import { dependencies, devDependencies, folders } from "../lib/defaults";
import execActions, { InitProject } from "../lib/exec.actions";
import createPackageJson from "../lib/generatePackageJson";

export async function createProject() {
  try {
    const { projectName } = await GetQuestions.getProjectName();

    if (!projectName || projectName.trim() === "") {
      throw new Error("Project name is required");
    }

    const projectPath = path.resolve(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
      throw new Error(`Project "${projectName}" already exists`);
    }

    await createFolderAndFiles(projectPath);

    const { useDefaultPackageJson } =
      await GetQuestions.useDefaultPackageJsonQuestion();

    chalk.green(`${useDefaultPackageJson}`);

    if (useDefaultPackageJson) {
      InitProject(projectPath);
    } else {
      const packageJson: PackageJson = await GetQuestions.getInitQuestions();

      const newFile = createPackageJson(packageJson, projectName);

      await fs.promises.writeFile(
        path.join(projectPath, "package.json"),
        JSON.stringify(newFile, null, 2)
      );
    }

    execActions(dependencies, devDependencies, projectPath);

    await createProjectLayout(projectPath, folders);

    console.log(chalk.green("Project created successfully!"));
    console.log(chalk.green(`cd ${projectPath}`));
  } catch (error) {
    console.error(
      chalk.red("An error occurred while creating the project:") + error.message
    );
  } finally {
    process.exit();
  }
}
