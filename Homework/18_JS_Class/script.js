class Car {
    constructor(brand, model, year, color) {
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color
    }

    getInfo() {
        return `Սա ${this.brand} ${this.model} է, ${this.color} գույնի, արտադրված ${this.year} թվականին`
    }
    getAge() {
        return 2026 - this.year
    }
}

const bmw = new Car("BMW", "X5", 2005, "Red")
const mercedes = new Car("Mercedes", "E-Class", 2018, "Black")

const carsArray = [bmw, mercedes]

carsArray.forEach(car => {
    console.log(car.getInfo())
    console.log(`Մեքենայի տարիքը: ${car.getAge()} տարեկան`)
})