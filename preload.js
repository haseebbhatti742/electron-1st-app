const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: process.versions.node,
  chrome: process.versions.chrome,
  electron: process.versions.electron,
  myApp: "1.0.0",
  myName: () => getMyName(),
  ping: () => ipcRenderer.invoke("ping"),
});

const getMyName = () => {
  return "Haseeb Ahmed";
};
