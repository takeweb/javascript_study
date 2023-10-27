export function outForElement() {
    const arry = ['あいうえお', 'かきくけこ', 'さしすせそ', 'たちつてと', 'なにぬねの']
    let element = document.querySelector('#for-test')
    let ul = element.appendChild(document.createElement('ul'))
    arry.forEach(currentValue => {
        ul.appendChild(document.createElement('li')).textContent = currentValue
    });

    const arry2 = ['はひふへほ', 'まみむめも', 'やゆよ', 'わをんああ']
    for (let currentValue of arry2) {
        ul.appendChild(document.createElement('li')).innerHTML = `<b>${currentValue}</b>`
    }

    const arry3 = ['abcde', 'fghij', 'klmlo', 'pqrst', 'uvwxyz']
    for (let i = 0; i < arry3.length; i++) {
        ul.appendChild(document.createElement('li')).innerHTML = `<b>${currentValue}</b>`
    }
}
