// English: Apply the saved theme before the first paint.
// 中文：在首次渲染前读取用户保存的主题，避免页面闪烁。
try {
  const theme = localStorage.getItem('portfolio-theme');
  if (theme === 'dark' || theme === 'light') document.documentElement.dataset.theme = theme;
} catch {
  // English: The system theme remains available. 中文：存储不可用时仍跟随系统主题。
}
