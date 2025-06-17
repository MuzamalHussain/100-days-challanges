let [ms, sec, min, hr] = [0, 0, 0, 0];
let display = document.getElementById("display");
let timer = null;

function updateTime() {
  ms += 10;
  if (ms === 1000) {
    ms = 0;
    sec++;
  }
  if (sec === 60) {
    sec = 0;
    min++;
  }
  
  
  const m = String(min).padStart(2, "0");
  const s = String(sec).padStart(2, "0");
  const milli = String(ms).padStart(3, "0");

  display.textContent = `${m}:${s}.${milli}`;
}

document.getElementById("start").addEventListener("click", () => {
  if (timer !== null) return;
  timer = setInterval(updateTime, 10); // Update every 10ms
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  [ms, sec, min,] = [ 0, 0, 0];
  display.textContent = "00:00:000";
});
