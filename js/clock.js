const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 5000); => 5초에 한번씩
// setTimeout(sayHello, 5000); => 5초 후 딱 한번 

getClock(); // 즉시 호출하여 딜레이를 제거
setInterval(getClock, 1000);

// "1".padStart(2,"0") : string의 길이가 1일때 앞에 "0"을 추가하여 길이를 2로 늘려준다.

