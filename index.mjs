#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const links = [
  {
    name: chalk.hex("#fff").bgHex("#0f111a")("Website"),
    url: "   https://zacharyp.dev",
  },
  {
    name: chalk.hex("#fff").bgHex("#000")("DEV.to"),
    url: "    https://dev.to/zacharyp",
  },
  {
    name: chalk.hex("#fff").bgHex("#5865F2")("Discord"),
    url: "   https://discord.gg/ZacharyP",
  },
  {
    name: chalk.hex("#fff").bgHex("#6e5494")("GitHub"),
    url: "    https://github.com/ZachCodedThat",
  },
  {
    name: chalk.hex("#fff").bgHex("#9146ff")("Twitch"),
    url: "    https://twitch.tv/zach_strikes_back",
  },
  {
    name: chalk.hex("#fff").bgHex("#1DA1F2")("Twitter"),
    url: "   https://twitter.com/TweetZachBack",
  },
  {
    name: chalk.hex("#fff").bgHex("#ff0000")("LinkedIn"),
    url: "   https://www.linkedin.com/in/zachary-przybilski/",
  },
];

const linkList = links
  .map((link) => `${link.name} ${link.url}`)
  .join("\n".repeat(2));

console.log(
  chalk.blue(
    boxen(
      chalk.green("Frontend Developer") + "\n" + linkList,

      {
        title: chalk.yellow("Zachary Przybilski"),
        titleAlignment: "center",
        padding: 1,
        margin: 1,
      }
    )
  )
);
