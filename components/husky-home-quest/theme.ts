export function getThemeClasses(darkMode: boolean) {
  return {
    page: darkMode
      ? "min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100"
      : "min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900",

    panel: darkMode
      ? "border-slate-800 bg-slate-900/80 shadow-black/20"
      : "border-slate-200 bg-white",

    softPanel: darkMode
      ? "border-slate-800 bg-slate-950/70"
      : "border-slate-200 bg-slate-50",

    textMuted: darkMode ? "text-slate-400" : "text-slate-500",
    textSoft: darkMode ? "text-slate-300" : "text-slate-600",

    primaryButton: darkMode
      ? "rounded-2xl bg-sky-500 text-slate-950 hover:bg-sky-400"
      : "rounded-2xl bg-slate-900 text-white hover:bg-slate-800",

    outlineButton: darkMode
      ? "rounded-2xl border-slate-700 bg-transparent text-slate-100 hover:bg-slate-800"
      : "rounded-2xl border-slate-200 bg-transparent text-slate-900 hover:bg-slate-100",
  };
}
