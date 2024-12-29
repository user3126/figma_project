
document.getElementById("button1").addEventListener("click", function () {
  switchScreen("screen1");
});

document.getElementById("button2").addEventListener("click", function () {
  switchScreen("screen2");
});

document.getElementById("button3").addEventListener("click", function () {
  switchScreen("screen3");
});

// 돌아가기 버튼 클릭 이벤트
document.getElementById("back-screen1").addEventListener("click", function () {
  switchScreen("frame-screen");
});

document.getElementById("back-screen2").addEventListener("click", function () {
  switchScreen("frame-screen");
});

document.getElementById("back-screen3").addEventListener("click", function () {
  switchScreen("frame-screen");
});


// 화면 전환 함수
function switchScreen(screenId) {
  const allScreens = document.querySelectorAll(".screen");
  allScreens.forEach((screen) => {
    screen.classList.add("hidden");
  });

  document.getElementById(screenId).classList.remove("hidden");
}
