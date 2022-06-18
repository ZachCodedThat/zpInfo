#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

console.log(
  chalk.blue(
    boxen(
      chalk.red("My name is Zach") +
        "\n" +
        chalk.green("I am a software developer"),

      {
        title: chalk.yellow("Yerrrrrrrt"),
        titleAlignment: "center",
        padding: 1,
        margin: 1,
      }
    )
  )
);
