const socket = io.connect()
const menu = document.getElementById("menu")
const btn = document.getElementById("button")
const output = document.getElementById("output")
btn.addEventListener("click", () => {    
  socket.emit("compile", { input: editor.getValue(), menu: menu.value })
})
socket.on("compile", (data) => {
  output.innerHTML = data
})
var hello = function () {
    
  var option = document.getElementById('menu').value
  console.log(option);
  
  if (option == "Javascript") {
    editor.session.setMode("ace/mode/javascript");
  }

  if (option == "C") {
      editor.session.setMode("ace/mode/c_cpp");
  }

  if (option == "C++") {
      editor.session.setMode("ace/mode/c_cpp");
  }
  if (option == "Java") {
      editor.session.setMode("ace/mode/java");
  }
}