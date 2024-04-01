export default function primitiveSample() {
    let name: string = 'John'
    console.log("primitive sample 1:", typeof name, name)

    let age: number = 28
    console.log("primittive sample 2:", typeof age, age)

    let isSingle: boolean = true
    console.log("primittive sample 3:", typeof isSingle, isSingle)

    const isOver20: boolean = age >= 20
    console.log("primittive sample 4:", typeof isOver20, isOver20)
}