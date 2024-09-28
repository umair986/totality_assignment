import { useState } from "react";
import { Property } from "../../app/page";
import PropertyCard from "./PropertyCard";

type PropertyListProps = {
  properties: Property[];
  addToCart: (property: Property, startDate: string, endDate: string) => void;
};

export default function PropertyList({
  properties,
  addToCart,
}: PropertyListProps) {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    amenities: [] as string[],
  });

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.location === "" ||
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())) &&
      (filters.minPrice === "" ||
        property.price >= parseInt(filters.minPrice)) &&
      (filters.maxPrice === "" ||
        property.price <= parseInt(filters.maxPrice)) &&
      (filters.bedrooms === "" ||
        property.bedrooms >= parseInt(filters.bedrooms)) &&
      (filters.amenities.length === 0 ||
        filters.amenities.every((amenity) =>
          property.amenities.includes(amenity)
        ))
    );
  });

  return (
    <div className="col-span-2">
      <div className="mb-4 grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Location"
          className="p-2 border rounded"
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
        <input
          type="number"
          placeholder="Min Price"
          className="p-2 border rounded"
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
        />
        <input
          type="number"
          placeholder="Max Price"
          className="p-2 border rounded"
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
        />
        <input
          type="number"
          placeholder="Min Bedrooms"
          className="p-2 border rounded"
          onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
