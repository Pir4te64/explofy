import type { DropdownItem } from '../lib/interfaces';

export function renderDropdownItems(
  items: DropdownItem[],
  selectedIndex: number,
  setSelectedIndex: (idx: number) => void
) {
  const navigateToCategory = (item: DropdownItem) => {
    const categorySlug = item.text
      .toLowerCase()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-');
    window.location.href = `/productos/${categorySlug}`;
  };
  return (
    <div className="flex flex-row w-full max-w-[clamp(31.25rem,62.5vw,43.75rem)] bg-[#CCD9DF] rounded-xl border border-[#B49AFF] shadow-lg p-[clamp(1rem,2vw,2rem)] gap-[clamp(0.5rem,1vw,0.5rem)]">
      {/* Main categories */}
      <div className="flex flex-col gap-[clamp(1rem,2vw,1.75rem)] min-w-[clamp(10rem,20vw,14rem)]">
        {items.map((item, idx) => (
          <button
            key={item.text}
            className={`text-[clamp(0.875rem,1.5vw,1rem)] text-left px-[clamp(0.5rem,1vw,0.5rem)] py-[clamp(0.25rem,0.5vw,0.25rem)] rounded-lg font-medium transition-all flex items-center justify-between ${
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
              <span className="ml-[clamp(0.5rem,1vw,0.5rem)] text-[#004B64]">
                &#8250;
              </span>
            )}
          </button>
        ))}
      </div>
      {/* Nested items for selected category */}
      <div className="flex flex-col gap-[clamp(1rem,2vw,1.5rem)] min-w-[clamp(8rem,16vw,10rem)]">
        {items[selectedIndex]?.nestedItems ? (
          items[selectedIndex].nestedItems.map(
            (nested: { text: string }, nidx: number) => (
              <button
                key={nested.text}
                className="text-[clamp(0.875rem,1.5vw,1rem)] px-[clamp(1.5rem,3vw,3rem)] py-[clamp(0.25rem,0.5vw,0.25rem)] rounded-lg text-[#004B64] bg-transparent font-normal hover:bg-[#F5A623]/30 text-left"
                onClick={() => {
                  const subcategorySlug = nested.text
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .replace(/\s+/g, '-');
                  window.location.href = `/productos/${subcategorySlug}`;
                }}
              >
                {nested.text}
              </button>
            )
          )
        ) : (
          <div className="text-[clamp(0.875rem,1.5vw,1rem)] px-[clamp(1.5rem,2vw,2rem)] py-[clamp(0.25rem,0.5vw,0.25rem)] text-[#004B64] opacity-60"></div>
        )}
      </div>
    </div>
  );
}
