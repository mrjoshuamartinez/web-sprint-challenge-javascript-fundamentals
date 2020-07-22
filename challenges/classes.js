// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakers {
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

const cuboidd = new CuboidMakers ({
    length: 4,
    width: 5,
    height: 5
});

class CubeMaker extends CuboidMakers {
    constructor (dims) {
        super (dims);
    }

    volume () {
        return (this.length * this.width * this.height);
    }

    surfaceArea () {
        return (6 * (this.length * this.length));
    }
}

const cube = new CubeMaker ({
    length: 4,
    width: 4,
    height: 4,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
console.log("Total Volume from Class CuboidMakers: ", cuboid.volume()); // 100
console.log("Total Surface Area from Class CuboidMakers: ", cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the
// dimension properties from CuboidMaker. Test your work by logging out your volume and surface area.

console.log("Total Volume from Class CubeMaker: ", cube.volume()); // 64
console.log("Total Surface Area from Class CubeMaker: ", cube.surfaceArea()); // 96