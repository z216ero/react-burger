export class Ingridient {
    constructor(ingridient) {
        this._id = ingridient._id;
        this.name = ingridient.name;
        this.type = ingridient.type;
        this.proteins = ingridient.proteins;
        this.fat = ingridient.fat;
        this.carbohydrates = ingridient.carbohydrates;
        this.calories = ingridient.calories;
        this.price = ingridient.price;
        this.image = ingridient.image;
        this.image_mobile = ingridient.image_mobile;
        this.image_large = ingridient.image_large;
        this.__v = ingridient.__v;
    }
}