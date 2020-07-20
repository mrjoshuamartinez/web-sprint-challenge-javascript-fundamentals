// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerr {
    constructor(dims) {
        this.length = dims.length;
        this.width = dims.width;
        this.height = dims.height;
    }

    volume () {
        return (this.length * this.width * this.height);
    }

    surfaceArea () {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

const cuboidd = new CuboidMakerr ({
    length: 4,
    width: 5,
    height: 5
});

class CubeMaker extends CuboidMakerr {
    constructor (dims) {
        super (dims);
        this.length = dims.length;
        this.width = dims.width;
        this.height = dims.height;
    }

    volume () {
        return (this.length * this.width * this.height);
    }

    surfaceArea () {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

const cube = new CubeMaker ({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
console.log("Total Volume from Class CuboidMakerr: ", cuboid.volume()); // 100
console.log("Total Surface Area from Class CuboidMakerr: ", cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the
// dimension properties from CuboidMaker. Test your work by logging out your volume and surface area.

console.log("Total Volume from Class CubeMaker: ", cube.volume()); // 100
console.log("Total Surface Area from Class CubeMaker: ", cuboid.surfaceArea()); // 130