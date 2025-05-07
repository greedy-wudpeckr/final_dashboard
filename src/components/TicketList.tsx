import TicketCard from "./TicketCard";
import Filters from "./Filters";
import Pagination from "./Pagination";
import { useTickets } from "../hooks/useTickets";
import { useTicketContext } from "../context/TicketContext";

const TicketList = () => {
  const { filteredTickets } = useTicketContext();
  const { currentTickets } = useTickets();

  return (
    <div className="flex flex-col h-full">
      <Filters />
      
      {filteredTickets.length === 0 ? (
        <div className="flex-grow flex items-center justify-center bg-accent/30 rounded-lg p-4 md:p-8 text-center">
          <div>
            <h3 className="text-lg md:text-xl font-medium mb-2">No tickets found</h3>
            <p className="text-sm md:text-base text-muted-foreground">
              Try changing your filters or search query
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-grow overflow-y-auto pb-4 space-y-2">
          {currentTickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      )}
      
      <Pagination />
    </div>
  );
};

export default TicketList;