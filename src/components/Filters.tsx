import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTicketContext } from "../context/TicketContext";

const Filters = () => {
  const { 
    setStatusFilter, 
    setPriorityFilter,
    statusFilter,
    priorityFilter
  } = useTicketContext();

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-accent/50 rounded-lg">
      <div className="w-full md:w-1/2">
        <label className="text-sm font-medium mb-1 block">Status</label>
        <Select 
          value={statusFilter} 
          onValueChange={(value) => setStatusFilter(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="max-h-60 overflow-y-auto">
            <SelectGroup>
              <SelectItem value="All">All Statuses</SelectItem>
              <SelectItem value="Open">Open</SelectItem>
              <SelectItem value="In Progress">In Progress</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Resolved">Resolved</SelectItem>
              <SelectItem value="Closed">Closed</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full md:w-1/2">
        <label className="text-sm font-medium mb-1 block">Priority</label>
        <Select 
          value={priorityFilter} 
          onValueChange={(value) => setPriorityFilter(value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filter by priority" />
          </SelectTrigger>
          <SelectContent className="max-h-60 overflow-y-auto">
            <SelectGroup>
              <SelectItem value="All">All Priorities</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Critical">Critical</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filters;