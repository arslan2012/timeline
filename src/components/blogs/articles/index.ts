import { lazy } from "react";

export const Msys2 = {
  title: "How I use zsh on windows",
  description:
    "How I set up msys2 + zsh + windows terminal on my work computer",
  Article: lazy(() => import("./msys2")),
};
