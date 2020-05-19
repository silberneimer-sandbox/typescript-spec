describe('spread operator', () => {
    it('引数の適用(Apply)', () => {
        const params = [1, 2];
        expect(sumByNumbers(...params)).toBe(3);
    });
    it('分解(Destructuring)', () => {
        const [x, y, ...others] = [1, 2, [3, 4]];
        expect(x).toBe(1);
        expect(y).toBe(2);
        expect(others).toStrictEqual([[3, 4]]);
    })
    it('配列の代入(Array Assignment)', () => {
        const numbers = [1, 2];
        const addedNumbers = [...numbers, 3, 4];
        expect(addedNumbers).toStrictEqual([1, 2, 3, 4]);
    })
    it('オブジェクト展開(Object Spread)', () => {
        const somePoint2d: Point2D = {x: 2, y: 3};
        const somePoint3d: Point3D = {...somePoint2d, z: 4};
        expect(somePoint3d).toStrictEqual({x: 2, y: 3, z: 4});
    })
});

function sumByNumbers(...numbers: Array<number>): number {
    return numbers.reduce((ret, value) => {
        return ret + value;
    }, 0);
}

type Point2D = {
    x: number,
    y: number
}

type Point3D = {
    x: number,
    y: number,
    z: number
}
