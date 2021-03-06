import { checkForURL } from '../src/client/js/URLChecker.js'

window.alert = jest.fn()
describe('URL validator', () => {
    test('the result should be true', () => {
        window.alert.mockClear()
        const url = 'https://www.google.com'
        expect(checkForURL(url)).toBe(true)
    })
    test('the result should be false', () => {
        window.alert.mockClear()
        const string = 'hello world'
        expect(checkForURL(string)).toBe(false)
    })
})