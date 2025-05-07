
import { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { useTicketContext } from "../context/TicketContext";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  const { setSearchQuery } = useTicketContext();
  const [localSearch, setLocalSearch] = useState('');

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(localSearch);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [localSearch, setSearchQuery]);

  return (
    <div className="relative w-full md:w-64 lg:w-80">
      <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search tickets..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};

export default SearchBar;
