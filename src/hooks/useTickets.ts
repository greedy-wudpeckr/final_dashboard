
import { useMemo } from 'react';
import { useTicketContext } from '../context/TicketContext';

export const useTickets = () => {
  const { 
    filteredTickets, 
    currentPage, 
    itemsPerPage 
  } = useTicketContext();

  // Get current tickets for pagination
  const currentTickets = useMemo(() => {
    const indexOfLastTicket = currentPage * itemsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - itemsPerPage;
    return filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);
  }, [filteredTickets, currentPage, itemsPerPage]);

  return { currentTickets };
};
