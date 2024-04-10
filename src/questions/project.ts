import inquirer from "inquirer";
import { PackageJson } from "../types";

export default class GetQuestions {
  static async getProjectName(): Promise<{ projectName: string }> {
    return await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Project name:",
      },
    ]);
  }

  static async getProjectQuestions(): Promise<{ projectName: string }> {
    return await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Project name:",
      },
    ]);
  }

  static async useDefaultPackageJsonQuestion(): Promise<{
    useDefaultPackageJson: boolean;
  }> {
    return await inquirer.prompt([
      {
        type: "confirm",
        name: "useDefaultPackageJson",
        message: "Do you want to use default package.json?",
        default: true,
      },
    ]);
  }

  static async getInitQuestions(): Promise<PackageJson> {
    return await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Project name:",
      },
      {
        type: "input",
        name: "description",
        message: "Project description:",
      },
      {
        type: "input",
        name: "version",
        message: "Project version:",
      },
      {
        type: "input",
        name: "main",
        message: "Project main file:",
      },
      {
        type: "input",
        name: "author",
        message: "Project author:",
      },
      {
        type: "input",
        name: "keywords",
        message: "Keywords:",
      },
      {
        type: "input",
        name: "license",
        message: "Project license:",
      },
    ]);
  }
}
