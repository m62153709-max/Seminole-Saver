"use client";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const deals = [
    {
      id: 1,
      title: "Hungry Howie’s Student Special",
      desc: "Large pizza + drink for $7.99 with FSU ID",
      category: "Food",
      expires: "Sept 15, 2025",
    },
    {
      id: 2,
      title: "Bill’s Bookstore Discount",
      desc: "10% off all used textbooks for students",
      category: "Books",
      expires: "Sept 30, 2025",
    },
    {
      id: 3,
      title: "Garnet & Gold Apparel Sale",
      desc: "Buy one, get one 50% off FSU shirts",
      category: "Clothing",
      expires: "Sept 20, 2025",
    },
  ];

  // Filter logic
  const filteredDeals =
    selectedCategory === "All"
      ? deals
      : deals.filter((deal) => deal.category === selectedCategory);

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-[#782F40] text-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-2">
            <img
              src="/piggy.png"
              alt="Seminole Saver Logo"
              className="h-12 w-12"
            />
            <h1 className="text-2xl font-bold">Seminole Saver</h1>
          </div>

          {/* Right: Menu + Button */}
          <div className="flex items-center space-x-4">
            {/* Categories Dropdown */}
            <select
              className="bg-white text-black rounded px-2 py-1"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Deals</option>
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
            </select>

            {/* Submit a Deal */}
            <a
              href="https://forms.gle/YOUR_FORM_LINK"
              target="_blank"
              className="bg-[#C9973B] text-sm px-2 py-1 rounded text-black hover:bg-yellow-500 
                         md:text-base md:px-3 md:py-1"
            >
              Submit a Deal
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-10 bg-white shadow-sm">
        <h2 className="text-3xl font-bold text-[#782F40] mb-2">
          Save Smarter at FSU
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover the best student discounts and local deals in Tallahassee.
        </p>
      </section>

      {/* Deals */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDeals.map((deal) => (
          <div
            key={deal.id}
            className="shadow-md border border-gray-200 rounded-2xl p-4"
          >
            <h3 className="text-xl font-bold text-[#782F40] mb-1">
              {deal.title}
            </h3>
            <p className="text-gray-700 mb-2">{deal.desc}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>{deal.category}</span>
              <span>Expires: {deal.expires}</span>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-100 text-center py-4 text-gray-600 text-sm">
        Built with ❤️ at FSU ·{" "}
        <a
          href="https://forms.gle/YOUR_FORM_LINK"
          target="_blank"
          className="text-[#782F40] underline"
        >
          Submit a deal
        </a>
      </footer>
    </div>
  );
}
