type itemArray = {
    name: string;
    [attr: string]: any;
}

type organizeditem = {
    [criteria: string]: itemArray[]
}

const data: itemArray[] = [
    {name: 'Alice', age: 21},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 21},
]


function groupBy(array: any[], callback: Function) {
    let organizedItems: organizeditem = {}
    array.forEach((item: itemArray) => {
        const criteria: string = callback(item)
        const criteriaInUse = criteria in organizedItems
        if (criteriaInUse) {
            organizedItems[criteria].push(item)
        } else {
            organizedItems[criteria] = [item]
        }
    })
    return organizedItems
}

const fruits: organizeditem = groupBy(data, (item: itemArray) => item.age)
console.log(fruits)