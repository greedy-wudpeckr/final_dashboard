
import { Badge } from "@/components/ui/badge";

type PriorityBadgeProps = {
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
};

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const getPriorityColor = () => {
    switch (priority) {
      case 'Low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Medium':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'High':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'Critical':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  return (
    <Badge variant="outline" className={`${getPriorityColor()} border-0`}>
      {priority}
    </Badge>
  );
};

export default PriorityBadge;
