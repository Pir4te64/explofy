export function renderDropdownItems(
  items: any[],
  selectedIndex: number,
  setSelectedIndex: (idx: number) => void
) {
  return (
    <div className="flex flex-row w-[90rem] bg-[#CCD9DF] rounded-xl border border-[#B49AFF] shadow-lg p-8 gap-12">
      {/* Main categories */}
      <div className="flex flex-col gap-6 min-w-[25rem]">
        {items.map((item, idx) => (
          <button
            key={item.text}
            className={`text-[1.35rem] text-left px-6 py-3 rounded-lg font-medium transition-all flex items-center justify-between ${
              idx === selectedIndex
                ? 'bg-[#F5A623] text-[#004B64] shadow-md'
                : 'hover:bg-[#F5A623]/70 text-[#004B64]'
            }`}
            onMouseEnter={() => setSelectedIndex(idx)}
            onFocus={() => setSelectedIndex(idx)}
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
      <div className="flex flex-col gap-6 min-w-[30rem]">
        {items[selectedIndex]?.nestedItems ? (
          items[selectedIndex].nestedItems.map((nested: any, nidx: number) => (
            <div
              key={nested.text}
              className="text-[1.35rem] px-6 py-3 rounded-lg text-[#004B64] bg-transparent font-normal"
            >
              {nested.text}
            </div>
          ))
        ) : (
          <div className="text-[1.35rem] px-6 py-3 text-[#004B64] opacity-60">
            Sin subcategorías
          </div>
        )}
      </div>
    </div>
  );
}
