function handleBar(val) {
    const bar = document.getElementById('storageBar');
    let width = 0, interval;

    interval = setInterval(function () {
        if (width < val + 1) {
            bar.style.width = `${width}px`
            width++
        } else {
            clearInterval(interval)
        }
    }, 5)
}

function handleIndicator(val, id, time) {
    const indicator = document.getElementById(id)
    let counter = 0, interval;

    interval = setInterval(function () {
        if (counter < val + 1) {
            indicator.innerText = counter
            counter++
        } else {
            clearInterval(interval)
        }
    }, time)
}

window.onload = function () {
    handleBar(370)
    handleIndicator(185, 'indicatorLeft', 12)
}