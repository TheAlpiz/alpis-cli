import { ExecOptions, exec } from "child_process";

function execActions(
  dependencies: string[],
  devDependencies: string[],
  projectPath: string
) {
  exec(
    `npm install ${dependencies.join(" ")} --save`,
    { cwd: projectPath },
    (error, stdout, stderr) => {
      if (error) {
        console.error("Error installing dependencies:", error);
        return;
      }
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
    }
  );

  exec(`npx tsc --init`, { cwd: projectPath }, (error, stdout, stderr) => {
    if (error) {
      console.error("Error initializing TypeScript:", error);
      return;
    }
  });
}

function InitProject(projectPath: string) {
  exec(`npm init -y`, { cwd: projectPath }, (error, stdout, stderr) => {
    if (error) {
      console.error("Error initializing npm:", error);
      return;
    }
  });
}

export default execActions;
export { InitProject };
