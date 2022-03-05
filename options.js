const nameInput = document.getElementById("name-input")
const btn = document.getElementById("save-btn")

btn.addEventListener("click", () => {
  const name = nameInput.value
  chrome.storage.sync.set(
    {
      name,
    },
    () => {
      console.log(`name is ${name}`)
    }
  )
})

chrome.storage.sync.get(["name", "test"], (result) => {
  nameInput.value = result.name ?? ""
})
