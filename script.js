function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag image
  const img = document.querySelector("#profile img")


  // substiuir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add imagem light
    img.setAttribute("src", "./assets/avatar_adjan-light.png")
    img.setAttribute("alt", "Adjan sorrindo de terno e gravata.")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar_adjan.jpg")
    img.setAttribute("alt", "Adjan sorrindo de boné.")
  }
}
