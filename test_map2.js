const resultList = [
    {
        id: 1,
        value: 'aaaa'
    },
    {
        id: 2,
        value: 'bbbb'
    },
    {
        id: 3,
        value: 'cccc'
    },
];

const selected = resultList.map(x => {
    return x.id;
});
console.log(selected);


const selected2 = resultList.map(x => x.id);
console.log(selected2);