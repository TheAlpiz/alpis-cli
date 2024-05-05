import { exec } from "child_process";
import util from "util";

const asyncExec = util.promisify(exec);

async function execActions(
  dependencies: string[],
  devDependencies: string[],
  projectPath: string
): Promise<void> {
  try {
    const { stdout, stderr } = await asyncExec(
      `npm install ${dependencies.join(" ")} --save`,
      { cwd: projectPath }
    );
    console.log("Dependencies installed successfully:", stdout);
  } catch (error) {
    console.error("Error installing dependencies:", error);
    throw error; // Propagate the error to the caller
  }

  try {
    const { stdout, stderr } = await asyncExec(
      `npm install ${devDependencies.join(" ")} --save-dev`,
      { cwd: projectPath }
    );
    console.log("Dev dependencies installed successfully:", stdout);
  } catch (error) {
    console.error("Error installing dev dependencies:", error);
    throw error; // Propagate the error to the caller
  }

  try {
    const { stdout, stderr } = await asyncExec(`npx tsc --init`, {
      cwd: projectPath,
    });
    console.log("TypeScript initialized successfully:", stdout);
  } catch (error) {
    console.error("Error initializing TypeScript:", error);
    throw error; // Propagate the error to the caller
  }
}

async function InitProject(projectPath: string): Promise<void> {
  try {
    const { stdout, stderr } = await asyncExec(`npm init -y`, {
      cwd: projectPath,
    });
    console.log("npm initialized successfully:", stdout);
  } catch (error) {
    console.error("Error initializing npm:", error);
    throw error; // Propagate the error to the caller
  }
}

export { execActions, InitProject };
