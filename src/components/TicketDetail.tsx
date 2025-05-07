import { useTicketContext } from "../context/TicketContext";
import { formatDistanceToNow, format } from "date-fns";
import { X } from "lucide-react";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

const TicketDetail = () => {
  const { selectedTicket, setSelectedTicket, updateTicketStatus } = useTicketContext();
  const [screenSize, setScreenSize] = useState({
    isSmall: false,
    isMedium: false,
    isLarge: false
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isSmall: width < 640,
        isMedium: width >= 640 && width < 1024,
        isLarge: width >= 1024
      });
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!selectedTicket) {
    return null;
  }

  const handleStatusChange = (status: string) => {
    updateTicketStatus(selectedTicket.id, status as any);
  };

  const createdDate = format(new Date(selectedTicket.createdAt), "PPP 'at' p");
  const shortCreatedDate = format(new Date(selectedTicket.createdAt), "PP");
  const updatedTimeAgo = formatDistanceToNow(new Date(selectedTicket.updatedAt), {
    addSuffix: true
  });

  return (
    <Card className="h-full detail-slide-in overflow-y-auto">
      <CardHeader className="flex flex-col sm:flex-row items-start justify-between space-y-2 sm:space-y-0 pb-2">
        <div className="w-full pr-8 sm:pr-0">
          <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
            {selectedTicket.title}
          </CardTitle>
          <div className="flex flex-wrap items-center text-xs sm:text-sm text-muted-foreground">
            <span>Ticket {selectedTicket.id}</span>
            <span className="mx-2">•</span>
            <span>Created on {screenSize.isSmall ? shortCreatedDate : createdDate}</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSelectedTicket(null)}
          className="absolute right-3 top-3 sm:relative sm:right-auto sm:top-auto"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <h4 className="text-sm font-medium mb-1">Customer</h4>
              <p className="text-sm md:text-base">{selectedTicket.customer}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-1">Email</h4>
              <p className="text-sm md:text-base break-all">{selectedTicket.customerEmail}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div>
              <h4 className="text-sm font-medium mb-1">Category</h4>
              <p className="text-sm md:text-base">{selectedTicket.category}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-1">Priority</h4>
              <PriorityBadge priority={selectedTicket.priority} />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-1">Status</h4>
            <Select
              value={selectedTicket.status}
              onValueChange={handleStatusChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Change status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Open">
                  <div className="flex items-center">
                    <span className="mr-2">Open</span>
                  </div>
                </SelectItem>
                <SelectItem value="In Progress">
                  <div className="flex items-center">
                    <span className="mr-2">In Progress</span>
                  </div>
                </SelectItem>
                <SelectItem value="Pending">
                  <div className="flex items-center">
                    <span className="mr-2">Pending</span>
                  </div>
                </SelectItem>
                <SelectItem value="Resolved">
                  <div className="flex items-center">
                    <span className="mr-2">Resolved</span>
                  </div>
                </SelectItem>
                <SelectItem value="Closed">
                  <div className="flex items-center">
                    <span className="mr-2">Closed</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium mb-2">Description</h4>
            <div className="bg-accent/50 p-2 sm:p-3 md:p-4 rounded-md">
              <p className="text-sm md:text-base whitespace-pre-wrap">{selectedTicket.description}</p>
            </div>
          </div>

          <div className="text-xs md:text-sm text-muted-foreground text-right">
            Last updated {updatedTimeAgo}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketDetail;