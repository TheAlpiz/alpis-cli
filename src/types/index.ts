interface PackageJson {
  name: string;
  version: string;
  description: string;
  main: string;
  scripts: { [key: string]: string };
  keywords: string;
  author: string;
  license: string;
  dependencies: { [key: string]: string };
  devDependencies: { [key: string]: string };
}

interface File {
  name: string;
  content: string;
}
interface Folder {
  name: string;
  hasDefaultFiles: boolean;
  files?: File[];
}

interface ProjectLayout {
  [key: string]: {
    hasMultipleFolders: boolean;
    hasDefaultFiles: boolean;
    files?: File[];
    folders?: Folder[];
  };
}

export { PackageJson, ProjectLayout };
