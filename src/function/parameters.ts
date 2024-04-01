//　Function with optional parameters
export const isUserSignedIn = (userId: string, username?: string): boolean => {
    if (userId === 'ABC') {
        console.log("Function parameters sample 1: User is signed in! Username is", username)
        return true
    } else {
        console.log("Function parameters sample 2: User is not signed in")
        return false
    }
}

// Deafault parameters
export const isUserSignedIn2 = (userId: string, username: string = "NO NAME"): boolean => {
    if (userId === 'ABC') {
        console.log("Function parameters sample 3: User is signed in! Username is", username)
        return true
    } else {
        console.log("Function parameters sample 4: User is not signed in")
        return false
    }
}

// Rest parameters
export const sumProductsPrice = (...productPrice: number[]): number => {
    return productPrice.reduce((prevTotal: number, productPrice: number) => {
        return prevTotal + productPrice
    }, 0)
}