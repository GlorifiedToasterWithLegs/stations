import { IsNotEmpty, IsIP, IsDefined, IsInt, Min, Max } from "class-validator";

export class CreateStationDto {
  @IsNotEmpty()
  location: string;
  
  @IsNotEmpty()
  @IsIP(4)
  ipAddress: string;
  
  @IsDefined()
  @IsInt()
  batteryCapacity: number;
  
  @IsDefined()
  @IsInt()
  @Min(0)
  @Max(100)
  batteryCharge: number;
}
