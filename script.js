const timeElement = document.getElementById("time")
const timerElement = document.getElementById("timer")

function syncTime() {
  const currentTime = new Date().toLocaleTimeString()
  timeElement.textContent = `The time is ${currentTime}`

  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0
    timerElement.textContent = `the timer is at ${time} seconds`
  })
}

syncTime()
setInterval(syncTime, 1000)

const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

start.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: true,
  })
})
stop.addEventListener("click", () => {
  chrome.storage.local.set({
    isRunning: false,
  })
})
reset.addEventListener("click", () => {
  chrome.storage.local.set({
    timer: 0,
    isRunning: false,
  })
})
