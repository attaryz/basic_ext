const timeElement = document.getElementById("time")
const nameElement = document.getElementById("name")
const timerElement = document.getElementById("timer")

function syncTime() {
  const currentTime = new Date().toLocaleTimeString()
  timeElement.textContent = `The time is ${currentTime}`

  chrome.storage.local.get(["timer", "name"], (res) => {
    const time = res.timer ?? 0

    timerElement.textContent = `the timer is at ${time} seconds`
  })
}

syncTime()
setInterval(syncTime, 1000)

chrome.storage.sync.get(["name"], (result) => {
  const name = result.name ?? ""
  nameElement.textContent = "Name:" + " " + name
})
