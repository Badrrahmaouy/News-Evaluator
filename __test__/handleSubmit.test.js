import { handleSubmit } from "../src/client/js/formHandler.js";
import { update } from '../src/client/js/formHandler';

describe('Testing the fetching function', () => {
    test('Testing handleSubmit() function', () => {
        expect(handleSubmit).toBeDefined()
    });
});