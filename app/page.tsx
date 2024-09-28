"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";

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

export type BookedProperty = Property & {
  quantity: number;
  startDate: string;
  endDate: string;
};

export default function Home() {
  const router = useRouter();
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

  const [cart, setCart] = useState<BookedProperty[]>([]);

  const addToCart = (
    property: Property,
    startDate: string,
    endDate: string
  ) => {
    const existingItem = cart.find((item) => item.id === property.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === property.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...property, quantity: 1, startDate, endDate }]);
    }
  };

  // const removeFromCart = (id: number) => {
  //   setCart(cart.filter((item) => item.id !== id));
  // };

  // const updateQuantity = (id: number, quantity: number) => {
  //   setCart(
  //     cart.map((item) =>
  //       item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
  //     )
  //   );
  // };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCheckout={handleCheckout}
      />
      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="w-full max-w-3xl">
          {/* Center the PropertyList */}
          <PropertyList properties={properties} addToCart={addToCart} />
        </div>
      </main>
    </div>
  );
}
