var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var CarS = /** @class */ (function (_super) {
    __extends(CarS, _super);
    function CarS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S ";
        return _this;
    }
    CarS.prototype.getPrice = function () {
        return 20000;
    };
    return CarS;
}(Car));
var CarX = /** @class */ (function (_super) {
    __extends(CarX, _super);
    function CarX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
    }
    CarX.prototype.getPrice = function () {
        return 50000;
    };
    return CarX;
}(Car));
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decorateCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decorateCar.getDescription() + " Enhanced Autopilot";
    };
    EnhancedAutoPilot.prototype.getPrice = function () {
        return this.decorateCar.getPrice() + 5000;
    };
    return EnhancedAutoPilot;
}(CarOptions));
var RarefacingSeats = /** @class */ (function (_super) {
    __extends(RarefacingSeats, _super);
    function RarefacingSeats(car) {
        var _this = _super.call(this) || this;
        _this.decorateCar = car;
        return _this;
    }
    RarefacingSeats.prototype.getDescription = function () {
        return this.decorateCar.getDescription() + " Rare Facing Seats.";
    };
    RarefacingSeats.prototype.getPrice = function () {
        return this.decorateCar.getPrice() + 2000;
    };
    return RarefacingSeats;
}(CarOptions));
var myTesla = new CarS();
myTesla = new RarefacingSeats(myTesla);
console.log(myTesla.getDescription());
console.log(myTesla.getPrice());
var myTesla1 = new CarX();
myTesla1 = new EnhancedAutoPilot(myTesla1);
console.log(myTesla1.getDescription());
console.log(myTesla1.getPrice());
