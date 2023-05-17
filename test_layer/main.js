const check1 = document.querySelector('#check1');
const check2 = document.querySelector('#check2');
const check3 = document.querySelector('#check3');

check1.addEventListener('change', (event) => {
    console.log(event);
    const layer1 = document.querySelector('.layer1');
    changeDisplay(check1, layer1);
});

check2.addEventListener('change', (event) => {
    console.log(event);
    const layer2 = document.querySelector('.layer2');
    changeDisplay(check2, layer2);
});

check3.addEventListener('change', (event) => {
    console.log(event);
    const layer3 = document.querySelector('.layer3');
    changeDisplay(check3, layer3);
});


function changeDisplay(check, layer) {
    if (check.checked) {
        layer.style.display = "block";
    } else {
        layer.style.display = "none";
    }
}
