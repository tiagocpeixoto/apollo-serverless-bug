const {generateEvent} = require("./event");
const {graphqlHandler} = require("../graphql");

describe('tests', function () {
    it('test name', async function () {
        const event = generateEvent({
            query: `
              query {
                hello
              }
            `,
        });

        const result = await graphqlHandler(event, {});
        expect(result.body).toEqual("{\"data\":{\"hello\":\"Hello world!\"}}\n");
    });

    it('test namePal', async function () {
        const event = generateEvent({
            query: `
              query($name: String!) {
                helloPal(name: $name)
              }
            `,
            variables: {
                "name": "Tiago"
            }
        });

        const result = await graphqlHandler(event, {});
        expect(result.body).toEqual("{\"data\":{\"helloPal\":\"Hello Tiago!\"}}\n");
    });
});