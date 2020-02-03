

describe('Promise', () => {
    it('resolve', () => {
        expect(helloWorld()).resolves.toBe("Hello, World!")
    });
    it('reject', () => {
        expect(shouldBeError()).rejects.toBe(ExpectError)
    });
    it('then', () => {
        expect.assertions(1);
        helloWorld()
            .then(r => expect(r).toMatch('Hello, World!'))
    });
    it('catch', () => {
        expect.assertions(1);
        shouldBeError()
            .catch((e) => {
                expect(e as Error).toStrictEqual(ExpectError);
            })
    });
});

const ExpectError = new Error("expect error");

function helloWorld(): Promise<string> {
    return new Promise<string>((resolve) => {
        resolve("Hello, World!")
    })
}

function shouldBeError(): Promise<string> {
    return new Promise<string>((_, reject) => {
        reject(ExpectError)
    })
}
