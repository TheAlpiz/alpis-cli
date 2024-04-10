import fs from "fs";
import { ProjectLayout } from "../types";
import path from "path";

const createFolder = async (folderPath: string) => {
  await fs.promises.mkdir(folderPath);
};

const createFile = async (filePath: string, content: string) => {
  await fs.promises.writeFile(filePath, content);
};

const createProjectLayout = async (
  projectPath: string,
  projectLayout: ProjectLayout
) => {
  const srcPath = path.join(projectPath, "src");

  for (const [folderName, folder] of Object.entries(projectLayout)) {
    const folderPath = path.join(srcPath, folderName);

    if (folder.hasMultipleFolders) {
      await createFolder(folderPath);

      for (const subFolder of folder.folders!) {
        const subFolderPath = path.join(folderPath, subFolder.name);
        await createFolder(subFolderPath);

        if (subFolder.hasDefaultFiles) {
          for (const file of subFolder.files!) {
            const filePath = path.join(subFolderPath, file.name);
            await createFile(filePath, file.content);
          }
        }
      }
    } else {
      await createFolder(folderPath);

      if (folder.hasDefaultFiles) {
        for (const file of folder.files!) {
          const filePath = path.join(folderPath, file.name);
          await createFile(filePath, file.content);
        }
      }
    }
  }
};

async function createFolderAndFiles(projectPath: string) {
  await fs.promises.mkdir(projectPath);
  await fs.promises.mkdir(path.join(projectPath, "src"));
  await fs.promises.writeFile(path.join(projectPath, "src", "index.ts"), "");
  await fs.promises.writeFile(path.join(projectPath, "src", "server.ts"), "");
  await fs.promises.writeFile(path.join(projectPath, ".env"), "");
}

export { createFolderAndFiles };
export default createProjectLayout;
