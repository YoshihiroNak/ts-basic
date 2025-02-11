// Arrow function
export const logMessage = (message: string):void => {
    console.log("Function basic sample 1:", message)
}

// 名前付き関数
export function logMessage2(message: string): void {
    console.log("Function basic sample 2:", message)
}

// 関数式
export const logMessage3 = (message: string): void => {
    console.log("Function basic sample 3:", message)
}

// Shorthand arrow function
export const logMessage4 = (message: string): void => console.log("Function basic sample 4:", message)

export const alwaysThroeError = (message: string): never => {
    throw new Error(message)
}

//　呼び出しシグネチャ　（省略記法）
type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
console.log("Function basic sample 6:", message)
}

// 完全な呼び出しシグネチャ
type FullLogMessage = {
    (message: string): void
}

export const logMessagge7: FullLogMessage = (message) => {
    console.log("Function basic sample 7:", message)
} 