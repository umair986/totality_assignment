import { useState } from "react";
import { Property } from "../../app/page";
import { DatePickerDemo } from "./Date";

type PropertyCardProps = {
  property: Property;
  addToCart: (property: Property, startDate: string, endDate: string) => void;
};

export default function PropertyCard({
  property,
  addToCart,
}: PropertyCardProps) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
        <p className="text-gray-600 mb-2">{property.description}</p>
        <p className="text-gray-800 font-bold mb-2">
          ${property.price} / night
        </p>
        <p className="text-gray-600 mb-2">Location: {property.location}</p>
        <p className="text-gray-600 mb-2">Bedrooms: {property.bedrooms}</p>
        <p className="text-gray-600 mb-2">
          Amenities: {property.amenities.join(", ")}
        </p>
        <div className="mt-4 space-y-2">
          <DatePickerDemo />

          <DatePickerDemo />
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => addToCart(property, startDate, endDate)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
