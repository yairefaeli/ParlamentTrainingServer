export class Player {
    constructor(private key: string, private name: string) { }

    getState() {
        return {
            key: this.key,
            name: this.name
        }
    }
}