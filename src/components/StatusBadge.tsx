
import { Badge } from "@/components/ui/badge";

type StatusBadgeProps = {
  status: 'Open' | 'In Progress' | 'Pending' | 'Resolved' | 'Closed';
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'Open':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'In Progress':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'Pending':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'Resolved':
        return 'bg-green-500 hover:bg-green-600';
      case 'Closed':
        return 'bg-gray-500 hover:bg-gray-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <Badge className={`${getStatusColor()} text-white`}>
      {status}
    </Badge>
  );
};

export default StatusBadge;
