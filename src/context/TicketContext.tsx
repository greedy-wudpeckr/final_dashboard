
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mockTickets, Ticket } from '../data/mockData';

interface TicketContextProps {
  tickets: Ticket[];
  filteredTickets: Ticket[];
  selectedTicket: Ticket | null;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  statusFilter: string;
  priorityFilter: string;
  searchQuery: string;
  darkMode: boolean;
  setSelectedTicket: (ticket: Ticket | null) => void;
  setStatusFilter: (status: string) => void;
  setPriorityFilter: (priority: string) => void;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
  updateTicketStatus: (id: string, newStatus: Ticket['status']) => void;
  toggleDarkMode: () => void;
}

const TicketContext = createContext<TicketContextProps | undefined>(undefined);

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Filter and search tickets
  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus = statusFilter === 'All' || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || ticket.priority === priorityFilter;
    const matchesSearch = ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          ticket.customer.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesPriority && matchesSearch;
  });

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);

  // Update ticket status
  const updateTicketStatus = (id: string, newStatus: Ticket['status']) => {
    // Update tickets state
    setTickets(prevTickets => 
      prevTickets.map(ticket => 
        ticket.id === id 
          ? { ...ticket, status: newStatus, updatedAt: new Date().toISOString() } 
          : ticket
      )
    );
    
    // Update selected ticket if it matches
    setSelectedTicket(prevSelected => 
      prevSelected && prevSelected.id === id 
        ? { ...prevSelected, status: newStatus, updatedAt: new Date().toISOString() } 
        : prevSelected
    );
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        filteredTickets,
        selectedTicket,
        currentPage,
        totalPages,
        itemsPerPage,
        statusFilter,
        priorityFilter,
        searchQuery,
        darkMode,
        setSelectedTicket,
        setStatusFilter,
        setPriorityFilter,
        setSearchQuery,
        setCurrentPage,
        updateTicketStatus,
        toggleDarkMode,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTicketContext must be used within a TicketProvider');
  }
  return context;
};
