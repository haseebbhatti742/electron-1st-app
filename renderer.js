const information = document.getElementById("info");
information.innerHTML = `This app is using Chrome (v${versions.chrome}), Nodejs(v${versions.node}), Electron(v${versions.electron}) And MyApp(v${versions.myApp})`;

document.getElementById("name").innerHTML = versions.myName();

const func = async () => {
  const response = await versions.ping();
  alert(response); // prints out 'pong'
};
