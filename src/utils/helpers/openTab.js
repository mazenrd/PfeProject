export const openInSameTab = (url) => {
  const newWindow = window.open(url, "_self");
  if (newWindow) {
    newWindow.opener = null;
  }
};
