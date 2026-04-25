import { CATEGORIES, DIETARY_FILTERS } from "../constants";

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="sticky top-[100px] bg-white border border-outline-variant rounded-lg p-6 shadow-sm">
        <h3 className="text-base font-semibold text-on-surface mb-4">Categories</h3>
        <ul className="space-y-1 mb-6">
          {CATEGORIES.map((cat) => (
            <li key={cat.name}>
              <button className={`w-full text-left flex items-center justify-between py-2 px-3 rounded-default text-sm font-medium transition-colors ${
                cat.name === "Produce" 
                  ? 'bg-secondary-container text-on-secondary-container' 
                  : 'text-on-surface-variant hover:bg-surface-container'
              }`}>
                <span>{cat.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  cat.name === "Produce" ? 'bg-white' : 'bg-surface-container-low text-outline'
                }`}>
                  {cat.count}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-outline-variant">
          <h3 className="text-base font-semibold text-on-surface mb-3">Dietary</h3>
          <div className="flex flex-wrap gap-2">
            {DIETARY_FILTERS.map((filter) => (
              <span 
                key={filter}
                className={`text-xs px-3 py-1.5 rounded-full cursor-pointer transition-colors ${
                  filter === "Gluten-Free" 
                    ? 'bg-secondary-container text-on-secondary-container border border-primary' 
                    : 'bg-surface-container text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container'
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
