describe('Promise', () => {
    it('引数の適用(Apply)', () => {
        expect(helloWorld()).resolves.toBe("Hello, World!")
        expect(fail()).rejects.toBe(new Error("should be error"))
    });
});

function helloWorld(): Promise<string> {
    return new Promise<string>((resolve) => {
        resolve("Hello, World!")
    })
}

function fail(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        reject(new Error("should be error"))
    })
}
