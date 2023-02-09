import { readFile } from "node:fs/promises";

import postcss from "postcss";
import { cssDeclarationSorter } from "css-declaration-sorter";

const input = await readFile("input.css");

postcss([cssDeclarationSorter({ order: "concentric-css" })])
  .process(input, { from: undefined })
  .then((result) => console.log(result.css));
