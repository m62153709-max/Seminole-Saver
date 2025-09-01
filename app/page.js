"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [deals, setDeals] = useState([]);
  const [filter, setFilter] = useState("All Deals");

  useEffect(() => {
    fetch("https://opensheet.elk.sh/1NQnbEvnkyCIGLJntli0_TdTodz8hIeAK0jk9aak9FFM/Sheet1")
      .then((res) => res.json())
      .then((data) => {
        const cleaned = data.map((deal) => ({
          Title: deal["Title"]?.trim(),
          Description: deal["Description"]?.trim(),
          Category: deal["Category"]?.trim(),
          Expires: deal["Expires"]?.trim(),
          Link: deal["Link"]?.trim(),
        }));
        setDeals(cleaned);
      });
  }, []);

  const categories = ["All Deals", ...new Set(deals.map((d) => d.Category))];
  const filteredDeals =
    filter === "All Deals"
      ? deals
      : deals.filter((deal) => deal.Category === filter);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-[#782F40] text-white flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="/piggy.png" alt="Logo" className="h-8 w-8 md:h-10 md:w-10" />
          <h1 className="text-lg md:text-2xl font-bold">Seminole Saver</h1>
        </div>
        <div className="flex space-x-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-black rounded px-2 py-1"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
          <a
            href="https://forms.gle/713A5p3w9i75DTQb9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#CEB888] text-black px-3 py-1 rounded hover:bg-yellow-600">
              Submit a Deal
            </button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="p-6 flex-grow">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#782F40] mb-2">
          Save Smarter at FSU
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Discover the best student discounts and local deals in Tallahassee.
        </p>

        {/* Deals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDeals.map((deal, idx) => (
            <a
              key={idx}
              href={deal.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-white rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition"
            >
              <h3 className="font-bold text-[#782F40] text-lg mb-1">
                {deal.Title}
              </h3>
              <p className="text-gray-700 mb-3">{deal.Description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span className="italic">{deal.Category}</span>
                {deal.Expires === "Ongoing" ? (
                  <span className="bg-[#CEB888] text-[#782F40] px-2 py-0.5 rounded-full text-xs font-semibold">
                    Ongoing
                  </span>
                ) : (
                  <span className="text-gray-600">Expires: {deal.Expires}</span>
                )}
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-100 text-center py-4 text-gray-600 text-sm">
        Built with ❤️ at FSU ·{" "}
        <a
          href="https://forms.gle/713A5p3w9i75DTQb9"
          target="_blank"
          className="text-[#782F40] underline"
        >
          Submit a deal
        </a>
      </footer>
    </div>
  );
}
