import Example from './example';

describe('Example', () => {
    it('test say hello', () => {
        const example = new Example()
        const result = example.sayHello('Elliot');
        expect(result).toEqual('Hello Elliot')
    })
});
