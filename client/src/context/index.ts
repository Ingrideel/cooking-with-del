import { createContext } from "react";

export interface Context {
  recipesCount: number;
}
export const INIT_CONTEXT: Context = {
  recipesCount: 0,
};

export const Context = createContext(INIT_CONTEXT);
