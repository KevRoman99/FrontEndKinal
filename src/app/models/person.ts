export class Person {
    constructor(
        public firstName: string,
        public middleName: string,
        public firstLastName: string,
        public secondLastName: string,
        public marriedName: string,
        public birthname: Date,
        public religion: string,
        public email:Array<any>,
        public gender: string,
        public civilStatus: string,
        public address: Object,
        public department: string,
        public municipality: string,
        public zone: Number,
        public residential: string,
        public avenue: string,
        public street: string,
        public sector: string,
        public number: string,
        public other: string,

        /**----------------------- */
        public phones: Object,
        public cellphone: string,
        public house: string,
        public otherNumber: Array<any>
    ) {}
}