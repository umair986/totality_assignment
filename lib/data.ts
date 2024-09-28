
import { useState } from "react";
export type Property = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    location: string;
    bedrooms: number;
    amenities: string[];
  };
const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      title: "Cozy Beachfront Cottage",
      description: "Charming cottage with stunning ocean views",
      price: 150,
      image: "1.jpg",
      location: "Malibu",
      bedrooms: 2,
      amenities: ["Wi-Fi", "Kitchen", "Parking"],
    },
    {
      id: 2,
      title: "Luxurious City Apartment",
      description: "Modern apartment in the heart of downtown",
      price: 200,
      image: "2.jpg",
      location: "New York",
      bedrooms: 3,
      amenities: ["Wi-Fi", "Gym", "Pool"],
    },
    {
      id: 3,
      title: "Mountain Retreat Cabin",
      description: "Secluded cabin with breathtaking mountain views",
      price: 180,
      image: "3.jpeg",
      location: "Aspen",
      bedrooms: 4,
      amenities: ["Fireplace", "Hot Tub", "Hiking Trails"],
    },
  ]);