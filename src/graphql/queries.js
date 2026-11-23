import { gql } from "@apollo/client";

export const GET_TRAVEL_OPTIONS = gql`
  query GetTravelOptions(
    $destinationId: ID!
    $simulateError: Boolean!
  ) {
    travelOptions(
      destinationId: $destinationId
      simulateError: $simulateError
    ) {
      id
      flights {
        id
        airline
        origin
        destination
        departureDate
        price
        available
      }
      hotels {
        id
        name
        location
        pricePerNight
        checkIn
        checkOut
        available
      }
    }
  }
`;
