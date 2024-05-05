import { exec } from "child_process";

function execActions(
  dependencies: string[],
  devDependencies: string[],
  projectPath: string
) {
  try {
    exec(
      `npm install ${dependencies.join(" ")} --save`,
      { cwd: projectPath },
      (error, stdout, stderr) => {
        if (error) {
          console.error("Error installing dependencies:", error);
          return;
        }
        console.log("Dependencies installed successfully:", stdout);
      }
    );

    exec(
      `npm install ${devDependencies.join(" ")} --save-dev`,
      { cwd: projectPath },
      (error, stdout, stderr) => {
        if (error) {
          console.error("Error installing dev dependencies:", error);
          return;
        }
        console.log("Dev dependencies installed successfully:", stdout);
      }
    );

    exec(`npx tsc --init`, { cwd: projectPath }, (error, stdout, stderr) => {
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
    exec(`npm init -y`, { cwd: projectPath }, (error, stdout, stderr) => {
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
