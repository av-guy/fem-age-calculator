/**
 * Get the user's currently preferred theme by first using localStorage.
 * If no theme is set, the user's default theme will be returned.
 * 
 * @returns {string} - The user's preferred theme.
 */
function detectColorScheme(): string {
  let theme;
  const preferredTheme = localStorage.getItem('preferredTheme');

  if (preferredTheme) {
    theme = preferredTheme;
  } else if (
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
    theme = 'dark';
  } else {
    theme = 'light';
  }

  return theme;
}

/**
 * Set the user's currently preferred theme.
 * 
 * @param {string} theme - The user's preferred theme. 
 */
function setPreferredTheme(theme: string): void {
  localStorage.setItem('preferredTheme', theme);
}

function loadPreferredTheme(theme: string): void {
  document.body.setAttribute("data-theme", theme);
}

export {
  detectColorScheme,
  setPreferredTheme,
  loadPreferredTheme
}