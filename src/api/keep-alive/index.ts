export enum keepAliveStatus{
    ACTIVE,
    PENDING,
    ERROR,
    DONE,
    SUSPEND
}

export const keepAliveResolvers = {
    Query: {
        keepAlive: (root, args, connectors)=>{
            return{
                token: args.token,
                timestamp: Date.now(),
                status: Math.floor(Math.random() * 5)
            };
        }
    },
    keepAlive:{
        status: result => keepAliveStatus[result.status],
        token: result => Buffer.from(result.token, "utf-8").toString("base64")
    }
}

