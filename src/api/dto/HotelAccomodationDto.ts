export interface HotelAccomodationDto {
  ratePlans: RatePlan[];
  rooms: Room[];
}

interface RatePlan {
  cancellationPolicy?: CancellationPolicy;
  id: string;
  longDescription?: string;
  prePayment: string;
  shortDescription: string;
  prePaymentIsPercentage?: boolean;
  prePaymentValue?: number;
}

interface CancellationPolicy {
  applicable: string;
  hour: string;
  name: string;
  penalty: string;
  text: string;
  amount?: number;
  days?: number;
}

interface Room {
  bedConfiguration: string;
  disabledAccess: boolean;
  facilities: Facility[];
  id: string;
  images: Image[];
  longDescription: string;
  name: string;
  occupancy: Occupancy;
  shortDescription: string;
}

interface Image {
  alt: string;
  url: string;
}

interface Occupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}

interface Facility {
  code: string;
  name: string;
}
