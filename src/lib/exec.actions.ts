import { exec } from "child_process";
import util from "util";
import ora from "ora";

const asyncExec = util.promisify(exec);

async function execActions(
  dependencies: string[],
  devDependencies: string[],
  projectPath: string
): Promise<void> {
  const spinner = ora("Installing dependencies").start();

  try {
    const { stdout, stderr } = await asyncExec(
      `npm install ${dependencies.join(" ")} --save`,
      { cwd: projectPath }
    );
    spinner.succeed("Dependencies installed");
  } catch (error) {
    spinner.fail("Error installing dependencies");
    console.error("Error installing dependencies:", error);
    throw error;
  }

  try {
    spinner.start("Installing dev dependencies");
    const { stdout, stderr } = await asyncExec(
      `npm install ${devDependencies.join(" ")} --save-dev`,
      { cwd: projectPath }
    );
    spinner.succeed("Dev dependencies installed");
  } catch (error) {
    spinner.fail("Error installing dev dependencies");
    console.error("Error installing dev dependencies:", error);
    throw error;
  }

  try {
    spinner.start("Initializing TypeScript");
    const { stdout, stderr } = await asyncExec(`npx tsc --init`, {
      cwd: projectPath,
    });
    spinner.succeed("TypeScript initialized");
  } catch (error) {
    spinner.fail("Error initializing TypeScript");
    console.error("Error initializing TypeScript:", error);
    throw error;
  }
}

async function InitProject(projectPath: string): Promise<void> {
  const spinner = ora("Initializing npm").start();

  try {
    const { stdout, stderr } = await asyncExec(`npm init -y`, {
      cwd: projectPath,
    });
    spinner.succeed("npm initialized");
  } catch (error) {
    spinner.fail("Error initializing npm");
    console.error("Error initializing npm:", error);
    throw error;
  }
}

export { execActions, InitProject };
