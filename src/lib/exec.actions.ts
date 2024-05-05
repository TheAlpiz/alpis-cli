import { exec } from "child_process";

function execActions(
  dependencies: string[],
  devDependencies: string[],
  projectPath: string
) {
  try {
    exec(
      `cd ${projectPath} && npm install ${dependencies.join(" ")} --save`,

      (error, stdout, stderr) => {
        if (error) {
          console.error("Error installing dependencies:", error);
          return;
        }
        console.log("Dependencies installed successfully:", stdout);
      }
    );

    exec(
      `cd ${projectPath} && npm install ${devDependencies.join(" ")} --save-dev`,

      (error, stdout, stderr) => {
        if (error) {
          console.error("Error installing dev dependencies:", error);
          return;
        }
        console.log("Dev dependencies installed successfully:", stdout);
      }
    );

    exec(`cd ${projectPath} && npx tsc --init`, (error, stdout, stderr) => {
      if (error) {
        console.error("Error initializing TypeScript:", error);
        return;
      }
      console.log("TypeScript initialized successfully:", stdout);
    });
  } catch (error) {
    console.error("An error occurred while executing actions:", error);
    return false;
  } finally {
    return true;
  }
}

function InitProject(projectPath: string) {
  try {
    exec(`cd ${projectPath} && npm init -y`, (error, stdout, stderr) => {
      if (error) {
        console.error("Error initializing npm:", error);
        return;
      }
      console.log("npm initialized successfully:", stdout);
    });
  } catch (error) {
    console.error("An error occurred while initializing the project:", error);
    return false;
  } finally {
    return true;
  }
}

export default execActions;
export { InitProject };
