export function renderDropdownItems(
  items: any[],
  selectedIndex: number,
  setSelectedIndex: (idx: number) => void
) {
  // Helper function to handle navigation
  const navigateToCategory = (item: any) => {
    // You can replace this with your actual navigation logic
    // For example, using a specific URL format for each category
    const categorySlug = item.text.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `/productos/categoria/${categorySlug}`;
  };

  return (
    <div className="flex flex-row w-[70rem] bg-[#CCD9DF] rounded-xl border border-[#B49AFF] shadow-lg p-8 gap-2">
      {/* Main categories */}
      <div className="flex flex-col gap-7 min-w-[14rem]">
        {items.map((item, idx) => (
          <button
            key={item.text}
            className={`text-[1rem] text-left px-2 py-1 rounded-lg font-medium transition-all flex items-center justify-between ${
              idx === selectedIndex
                ? 'bg-[#F5A623] text-[#004B64] shadow-md'
                : 'hover:bg-[#F5A623]/70 text-[#004B64]'
            }`}
            onMouseEnter={() => setSelectedIndex(idx)}
            onFocus={() => setSelectedIndex(idx)}
            onClick={() => navigateToCategory(item)}
            tabIndex={0}
          >
            {item.text}
            {item.nestedItems && (
              <span className="ml-2 text-[#004B64]">&#8250;</span>
            )}
          </button>
        ))}
      </div>
      {/* Nested items for selected category */}
      <div className="flex flex-col gap-6 min-w-[10rem]">
        {items[selectedIndex]?.nestedItems ? (
          items[selectedIndex].nestedItems.map((nested: any, nidx: number) => (
            <button
              key={nested.text}
              className="text-[1rem] px-12 py-1 rounded-lg text-[#004B64] bg-transparent font-normal hover:bg-[#F5A623]/30 text-left"
              onClick={() => {
                // Navigate to subcategory page
                const categorySlug = items[selectedIndex].text
                  .toLowerCase()
                  .replace(/\s+/g, '-');
                const subcategorySlug = nested.text
                  .toLowerCase()
                  .replace(/\s+/g, '-');
                window.location.href = `/productos/categoria/${categorySlug}/${subcategorySlug}`;
              }}
            >
              {nested.text}
            </button>
          ))
        ) : (
          <div className="text-[1rem] px-8 py-1 text-[#004B64] opacity-60"></div>
        )}
      </div>
    </div>
  );
}
