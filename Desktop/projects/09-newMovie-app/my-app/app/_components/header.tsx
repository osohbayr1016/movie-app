"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../../components/ui/button"

export const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkThemeActice = resolvedTheme === "dark";

  const toggleTheme = () => setTheme(isDarkThemeActice ? "light" : "dark");
  return (
    <Button size="icon" onClick={toggleTheme}>
      {isDarkThemeActice ? <Sun /> : <Moon />}
    </Button>
  );
};
