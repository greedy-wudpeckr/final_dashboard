
import { Button } from "@/components/ui/button";
import { useTicketContext } from "../context/TicketContext";
import SearchBar from "./SearchBar";
import { MoonIcon, SunIcon } from "lucide-react";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTicketContext();

  return (
    <header className="py-6 px-4 md:px-6 border-b flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <h1 className="text-2xl font-bold">Support Beacon</h1>
        <p className="text-muted-foreground">Customer Support Ticket Dashboard</p>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4 w-full md:w-auto">
        <SearchBar />
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleDarkMode} 
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
