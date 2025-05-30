import { Toy } from "../../model/Toy.model";

export class ToyBuilder {
  private type!: string;
  private ageGroup!: string;
  private brand!: string;
  private material!: string;
  private batteryRequired!: boolean;
  private educational!: boolean;

  public static newBuilder(): ToyBuilder{
    return new ToyBuilder();
  }

  setType(type: string): ToyBuilder {
    this.type = type;
    return this;
  }
  setAgeGroup(ageGroup: string): ToyBuilder {
    this.ageGroup = ageGroup;
    return this;
  }
  setBrand(brand: string): ToyBuilder {
    this.brand = brand;
    return this;
  }
  setMaterial(material: string): ToyBuilder {
    this.material = material;
    return this;
  }
  setBatteryRequired(batteryRequired: boolean): ToyBuilder {
    this.batteryRequired = batteryRequired;
    return this;
  }
  setEducational(educational: boolean): ToyBuilder {
    this.educational = educational;
    return this;
  }
  build(): Toy {
    return new Toy(
      this.type,
      this.ageGroup,
      this.brand,
      this.material,
      String(this.batteryRequired),
      String(this.educational)
    );
  }
}