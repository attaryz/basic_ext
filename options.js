const secondsInput = document.getElementById("seconds-input")
const btn = document.getElementById("save-btn")

btn.addEventListener("click", () => {
  const notificationTime = secondsInput.value
  chrome.storage.sync.set({
    notificationTime,
  })
})

chrome.storage.sync.get(["notificationTime"], (result) => {
  secondsInput.value = result.notificationTime ?? 1000
})
