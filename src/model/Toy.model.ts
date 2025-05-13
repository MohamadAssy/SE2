export class Toy {
    private name: string;
    private type: string;
    private price: number;
    private ageGroup: string;
  
    constructor(
        name: string,
        type: string,
        price: number,
        ageGroup: string
    ) 
    {
      this.name = name;
      this.type = type;
      this.price = price;
      this.ageGroup = ageGroup;
    }
  
    getName(): string {
      return this.name;
    }
  
    getType(): string {
      return this.type;
    }
  
    getPrice(): number {
      return this.price;
    }
  
    getAgeGroup(): string {
      return this.ageGroup;
    }
  }
  