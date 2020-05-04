import { executeQuery } from "../../../../tests-utils/test.spec";

executeQuery


describe("keep alive schema", () => {
    let schema: string;
    let query: string;
    beforeEach(() => {
        schema = `
        extend type Query{
            keepAliveMock: keepAlive
        }
        `;
        query = `query test{
            keepAliveMock {
                timestamp
                token
                status
            }
        }
        `;
    });

    it("should convert the token to base64 and status key to KeepAliveStatus", async () => {
        const result = await executeQuery(
            schema,
            {
                Query: {
                    keepAliveMock: () => ({
                        token: "my-token",
                        timestamp: 12345678,
                        status: 1
                    })
                }
            },
            query
        );
        expect(result.data.keepAliveMock.token).toBe("bXktdG9rZW4=");
        expect(result.data.keepAliveMock.timestamp).toBe(12345678);
        expect(result.data.keepAliveMock.status).toBe("PENDING");
    })

    it("should retun null if no data is returned", async () => {
        const result = await executeQuery(
            schema,
            {
                Query: {
                    keepAliveMock: () => undefined
                }
            },
            query
        );
        expect(result.data.keepAliveMock).toBe(null);
    })


    it("should return null if no data is returned", async () => {
        const result = await executeQuery(
            schema,
            {
                Query: {
                    keepAliveMock: () => ({
                        token: "",
                        timestamp: undefined,
                        status: 9
                    })
                }
            },
            query
        );
        expect(result.data.keepAliveMock.token).toBe("");
        expect(result.data.keepAliveMock.timestamp).toBe(null);
        expect(result.data.keepAliveMock.status).toBe(null);
    })
})
