#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import figlet from "figlet";
import { createProject } from "./actions/project";

const program = new Command();

program.version("0.0.1");

console.log(
  chalk.green(figlet.textSync("Alpis CLI", { horizontalLayout: "full" }))
);

program
  .command("create")
  .description("create a new project")
  .action(() => {
    createProject();
  });

program
  .command("make:route")
  .description("create a new route")
  .action(() => {
    console.log("make:route");
  });

program
  .command("make:handler")
  .description("create a new handler")
  .action(() => {
    console.log("make:handler");
  });

program
  .command("make:schema")
  .description("create a new schema")
  .action(() => {
    console.log("make:schema");
  });

program
  .command("make:service")
  .description("create a new service")
  .action(() => {
    console.log("make:service");
  });

program
  .command("make:middleware")
  .description("create a new middleware")
  .action(() => {
    console.log("make:middleware");
  });

program.parse(process.argv);
