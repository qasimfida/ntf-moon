"use client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useServerInsertedHTML } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeMode } from "@/redux/theme/themeSlice";
import { theme } from "./constants";

export const Theme = (props) => {
  const [activeTheme, setActiveTheme] = useState('light');
  const themeMode = useSelector((state) => state.theme.themeMode);

  const dispatch = useDispatch();

  const { children } = props;
  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: "mui-theme"});
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });
  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      dispatch(changeThemeMode(theme));
      setActiveTheme(theme);
    } else {
      localStorage.setItem("theme", "light");
      dispatch(changeThemeMode("light"));
      setActiveTheme("light");
    }
  }, [themeMode]);
console.log({cache})
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme(activeTheme)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}