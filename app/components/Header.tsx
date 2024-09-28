"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Image from "next/image";
import { ShoppingCart, ChevronDown, Bell, User, LogOut } from "lucide-react";

type HeaderProps = {
  cartCount: number;
  onCheckout: () => void;
};

export default function Header({ cartCount, onCheckout }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleCartClick = () => {
    onCheckout();

    router.push("/Cart");
  };

  // const handleCartClick = () => {
  //   console.log("Cart icon clicked");
  //   onCheckout();
  //   router.push("/Cart"); // or "/cart"
  // };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-800">
            Totality Corp
          </span>
        </div>
        <nav className="hidden md:flex space-x-4"></nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900 relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-2 h-2"></span>
          </button>
          <div
            className="flex items-center cursor-pointer"
            onClick={handleCartClick} // Use the new handleCartClick function
          >
            <ShoppingCart className="h-6 w-6 text-gray-600" />
            <span className="ml-2 text-sm font-medium text-gray-700">
              {cartCount}
            </span>
          </div>
          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <Image
                src="/user.png"
                alt="User"
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <ChevronDown className="h-4 w-4" />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <div className="px-4 py-2 border-b">
                  <p className="text-sm font-medium text-gray-900">John Doe</p>
                  <p className="text-sm text-gray-500">johndoe@example.com</p>
                </div>

                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <User className="mr-2 h-4 w-4" /> Account
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <LogOut className="mr-2 h-4 w-4" /> Log out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
