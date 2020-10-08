export default class Attribute {
    private _value: number = 0;

    constructor(
        public readonly name: string,
        public readonly description: string
    ){}

    increase(){
        this._value += 1;
    }

    get value() {
        return this._value;
    }

}