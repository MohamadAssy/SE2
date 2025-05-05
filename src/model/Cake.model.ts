

export class Cake {
    private id: number;
    private name: string;
    private quantity: number;
    private price: number;

    constructor(
        id: number, 
        name: string, 
        quantity: number,
        price: number
    ) 
    {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getQuantity(): number {
        return this.quantity;
    }

    getPrice(): number {
        return this.price;
    }
}
