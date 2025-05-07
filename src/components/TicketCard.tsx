
import { Card, CardContent } from "@/components/ui/card";
import { Ticket } from "../data/mockData";
import { useTicketContext } from "../context/TicketContext";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import { formatDistanceToNow } from "date-fns";

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard = ({ ticket }: TicketCardProps) => {
  const { setSelectedTicket, selectedTicket } = useTicketContext();
  const isSelected = selectedTicket?.id === ticket.id;

  // Format date to relative time (e.g., "2 hours ago")
  const formattedDate = formatDistanceToNow(new Date(ticket.updatedAt), { 
    addSuffix: true 
  });

  return (
    <Card 
      className={`ticket-card cursor-pointer transition-all mb-3 ${
        isSelected ? "border-primary ring-2 ring-primary/20" : ""
      }`}
      onClick={() => setSelectedTicket(ticket)}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="text-xs text-muted-foreground">{ticket.id}</div>
          <StatusBadge status={ticket.status} />
        </div>
        
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{ticket.title}</h3>
        
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm">{ticket.customer}</span>
          <PriorityBadge priority={ticket.priority} />
        </div>
        
        <div className="flex justify-between items-center text-xs text-muted-foreground">
          <span>{ticket.category}</span>
          <span>Updated {formattedDate}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
