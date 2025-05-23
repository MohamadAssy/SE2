
export class Toy {
  private type: string;
  private ageGroup: string;
  private brand: string;
  private material: string;
  private batteryRequired: string;
  private educational: string;

  constructor(
    type: string,
    ageGroup: string,
    brand: string,
    material: string,
    batteryRequired: string,
    educational: string
  ) {
    this.type = type;
    this.ageGroup = ageGroup;
    this.brand = brand;
    this.material = material;
    this.batteryRequired = batteryRequired;
    this.educational = educational;
  }

  getType(): string {
    return this.type;
  }
  getAgeGroup(): string {
    return this.ageGroup;
  }
  getBrand(): string {
    return this.brand;
  }
  getMaterial(): string {
    return this.material;
  }
  getBatteryRequired(): string {
    return this.batteryRequired;
  }
  getEducational(): string {
    return this.educational;
  }
}
