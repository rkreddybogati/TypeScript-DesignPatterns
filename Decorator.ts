
abstract class Car {
    public description: string;
    public getDescription(): string {
        return this.description;
    }
    
    public abstract getPrice(): number;
}

class CarS extends Car{
    public description = "Model S ";
    public getPrice(): number {
        return 20000;    }
}

class CarX extends Car{    
        public description = "Model X";    
        public getPrice(): number {
            return 50000;
        }
}

abstract class CarOptions extends Car {
    decorateCar: Car;
    public abstract getDescription():string;
    public abstract getPrice(): number;
}

class EnhancedAutoPilot extends CarOptions {
    decorateCar: Car;

    constructor(car: Car) {
        super();
        this.decorateCar = car;
    }
    
    public getDescription(): string {
        return this.decorateCar.getDescription() + " Enhanced Autopilot";
    }
    public getPrice(): number {
        return this.decorateCar.getPrice() + 5000;
    }
}

class RarefacingSeats extends CarOptions {
    
    decorateCar: Car;
    
    constructor(car: Car) {
        super();
        this.decorateCar = car;
    }

    public getDescription(): string {
        return this.decorateCar.getDescription() + " Rare Facing Seats."
    }
    public getPrice(): number {
        return this.decorateCar.getPrice() + 2000;
    }

}

let myTesla = new CarS();
myTesla = new RarefacingSeats(myTesla);

console.log(myTesla.getDescription());
console.log(myTesla.getPrice())


let myTesla1  = new CarX();
myTesla1 = new EnhancedAutoPilot(myTesla1)


console.log(myTesla1.getDescription());
console.log(myTesla1.getPrice());









