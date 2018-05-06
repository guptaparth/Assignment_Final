const socket = io.connect()
const menu = document.getElementById("menu")
const btn = document.getElementById("button")
const output = document.getElementById("output")
const edit = document.getElementById("input")

btn.addEventListener("click", () => {
  const input = editor.getValue()
  socket.emit("compile", { input: input, menu: menu.value })
})

edit.addEventListener("keypress", () => {
  socket.emit("typing", editor.getValue())
})

socket.on("compile", (data) => {
  output.innerHTML = data
})
socket.on('typing', (data) => {
  editor.getSession().setValue(data)
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