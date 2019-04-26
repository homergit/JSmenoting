export const CONST = "CONST";

export class TsClass {
    private readonly name: string;

    constructor(name = "TypeScript for Webpack") {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}
