const BaseUri = "https://obmng.dbm.guestline.net/api";

export const hotelProviderListUri = (hotelProviderId: string) =>
  `${BaseUri}/hotels?collection-id=${hotelProviderId}`;
export const hotelDetailsUri = (hotelProviderId: string, hotelId: string) =>
  `${BaseUri}/roomRates/${hotelProviderId}/${hotelId}`;
