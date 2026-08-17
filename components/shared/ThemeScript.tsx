export default function ThemeScript() {
    const themeScript = `
      (function() {
        try {
          var saved = localStorage.getItem('theme');
          var theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
          if (theme === 'system') {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
          if (theme === 'light') {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
          } else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
          }
        } catch (e) {}
      })();
    `
  
    return (
      <script
        dangerouslySetInnerHTML={{ __html: themeScript }}
      />
    )
  }