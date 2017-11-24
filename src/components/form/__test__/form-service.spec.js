import { fetchData, fetchDataAsync } from "../form-service";


describe('>>>Test async code', () => {
    it('+++ Test callback', done => {
        function callback(data) {
            expect(data).toBe('Some data');
            done();
        }

        fetchData(callback);
    });

    it('+++ Test async code', () => {
        expect.assertions(1);
        return fetchDataAsync().then(data => {
            expect(data).toBe('Some data');
        });
    });

    it('+++ Test async code with await/async', async () => {
        expect.assertions(1);
        const data = await fetchDataAsync();
        expect(data).toBe('Some data')
    });
});