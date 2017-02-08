function createComputerHierarchy() {
    class PcManufacturer {
        constructor(manufacturer){
            if (new.target === PcManufacturer) {
                throw new Error;
            }

            this.manufacturer = manufacturer
        }
    }

    class Keyboard extends PcManufacturer{

        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends PcManufacturer{

        constructor(manufacturer, width, height) {
            super(manufacturer);

            this.width = width;
            this.height = height;
        }
    }

    class Battery extends PcManufacturer {

        constructor(manufacturer, expectedLife) {
            super(manufacturer);

            this.expectedLife = expectedLife;
        }
    }

    class Computer extends PcManufacturer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error;
            }
            super(manufacturer)

            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }


        get battery() {
            return this._battery;
        }

        set battery(value) {
            if (!(value instanceof Battery)){
                throw new TypeError;
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer {

        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.monitor = monitor;
            this.keyboard = keyboard;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (!(value instanceof Keyboard)){
                throw new TypeError;
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (!(value instanceof Monitor)){
                throw new TypeError;
            }
            this._monitor = value;
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
