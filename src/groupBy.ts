type User = {
    name: string;
    age: number;
}

const data: User[] = [
    {name: 'Alice', age: 21},
    {name: 'Bob', age: 25},
    {name: 'Charlie', age: 21},
]

function groupBy<T, K extends keyof T>(
    array: T[],
    callback: (item: T) => T[K]
): Record<T[K] & (string | number | symbol), T[]>{
    let organizedItems:Record<T[K] & (string | number | symbol), T[]> = {} as any
    array.forEach((item: T) => {
        const separator: T[K] = callback(item)
        const separatorKey = separator as T[K] & (string | number | symbol)
        if(separatorKey in organizedItems) {
            organizedItems[separatorKey].push(item)
        }else{
            organizedItems[separatorKey] = [item]
        }
    })
    return organizedItems;
}

const groupedByAge = groupBy(data, item => item.age)
console.log(groupedByAge)

// function groupBy(array: any[], callback: Function) {
//     let organizedItems: organizeditem = {}
//     array.forEach((item: itemArray) => {
//         const criteria: string = callback(item)
//         const criteriaInUse = criteria in organizedItems
//         if (criteriaInUse) {
//             organizedItems[criteria].push(item)
//         } else {
//             organizedItems[criteria] = [item]
//         }
//     })
//     return organizedItems
// }
//
// const fruits: organizeditem = groupBy(data, (item: itemArray) => item.age)
// console.log(fruits)