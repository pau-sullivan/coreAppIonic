
interface DiscountTypeModel{
    text: string;
}
interface DiscountModel{
    type: DiscountTypeModel;
    text: string,
    expirationDate: Date;
}
export class DiscountType implements DiscountTypeModel{
    constructor( public text: string){}
}
export class Discount implements DiscountModel{
    constructor(
        public type: DiscountType, 
        public text: string, 
        public expirationDate:Date){}
}