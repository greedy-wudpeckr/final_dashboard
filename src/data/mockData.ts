
export interface Ticket {
  id: string;
  title: string;
  customer: string;
  customerEmail: string;
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Open' | 'In Progress' | 'Pending' | 'Resolved' | 'Closed';
  createdAt: string;
  updatedAt: string;
  description: string;
  category: string;
}

export const mockTickets: Ticket[] = [
  {
    id: "TKT-1001",
    title: "Login failure on Safari for SSO users",
    customer: "Acme Corp",
    customerEmail: "support@acmecorp.com",
    priority: "High",
    status: "Open",
    createdAt: "2025-05-01T10:15:00Z",
    updatedAt: "2025-05-01T14:30:00Z",
    description: "Users experiencing redirect loop during SSO login on Safari browsers. Happens only with enterprise accounts.",
    category: "Authentication"
  },
  {
    id: "TKT-1002",
    title: "Dashboard data not refreshing",
    customer: "TechInnovate LLC",
    customerEmail: "help@techinnovate.com",
    priority: "Medium",
    status: "In Progress",
    createdAt: "2025-04-29T08:22:00Z",
    updatedAt: "2025-05-01T09:15:00Z",
    description: "Analytics dashboard data is stale and not updating with new information despite refreshing the page.",
    category: "Dashboard"
  },
  {
    id: "TKT-1003",
    title: "Payment processing timeout error",
    customer: "Global Retail Inc",
    customerEmail: "support@globalretail.com",
    priority: "Critical",
    status: "Open",
    createdAt: "2025-05-02T15:10:00Z",
    updatedAt: "2025-05-02T15:45:00Z",
    description: "Customers unable to complete checkout process due to payment gateway timeout. Affects approximately 30% of transactions.",
    category: "Payments"
  },
  {
    id: "TKT-1004",
    title: "Mobile app crashes on upload",
    customer: "HealthPlus",
    customerEmail: "tech@healthplus.org",
    priority: "High",
    status: "In Progress",
    createdAt: "2025-05-01T09:45:00Z",
    updatedAt: "2025-05-02T11:20:00Z",
    description: "iOS app version 2.3.4 crashes when users attempt to upload medical documents larger than 5MB.",
    category: "Mobile App"
  },
  {
    id: "TKT-1005",
    title: "Unable to download monthly reports",
    customer: "Finance Solutions",
    customerEmail: "help@financesolutions.net",
    priority: "Medium",
    status: "Pending",
    createdAt: "2025-04-30T16:05:00Z",
    updatedAt: "2025-05-01T10:30:00Z",
    description: "Export to PDF functionality failing for monthly financial reports. Excel exports working correctly.",
    category: "Reporting"
  },
  {
    id: "TKT-1006",
    title: "Missing notification emails",
    customer: "Marketing Pro",
    customerEmail: "support@marketingpro.io",
    priority: "Low",
    status: "Resolved",
    createdAt: "2025-04-28T14:20:00Z",
    updatedAt: "2025-05-01T09:00:00Z",
    description: "Email notifications for campaign completions not being delivered to Gmail addresses. Other email providers working correctly.",
    category: "Notifications"
  },
  {
    id: "TKT-1007",
    title: "API rate limiting too restrictive",
    customer: "DevOps Heroes",
    customerEmail: "api@devopsheroes.com",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-05-02T08:30:00Z",
    updatedAt: "2025-05-02T08:30:00Z",
    description: "Enterprise tier customers hitting API rate limits below documented thresholds. Need urgent increase to prevent workflow disruptions.",
    category: "API"
  },
  {
    id: "TKT-1008",
    title: "Data visualization incorrect on Firefox",
    customer: "Research Lab Inc",
    customerEmail: "tech@researchlab.edu",
    priority: "Low",
    status: "In Progress",
    createdAt: "2025-04-29T13:15:00Z",
    updatedAt: "2025-05-01T16:40:00Z",
    description: "Bar charts displaying incorrect scale when rendered in Firefox browsers. Chrome and Safari working as expected.",
    category: "Data Visualization"
  },
  {
    id: "TKT-1009",
    title: "Account lockout after password reset",
    customer: "City Services",
    customerEmail: "help@cityservices.gov",
    priority: "High",
    status: "Closed",
    createdAt: "2025-04-27T09:10:00Z",
    updatedAt: "2025-04-29T14:25:00Z",
    description: "Users unable to login for 24 hours after using the 'Forgot Password' feature. Affects approximately 5% of password reset attempts.",
    category: "Authentication"
  },
  {
    id: "TKT-1010",
    title: "Inventory sync delays",
    customer: "Retail Chain XYZ",
    customerEmail: "inventory@retailxyz.com",
    priority: "Critical",
    status: "In Progress",
    createdAt: "2025-05-02T07:50:00Z",
    updatedAt: "2025-05-02T13:10:00Z",
    description: "Real-time inventory updates taking up to 30 minutes to propagate across store locations. Causing overselling issues.",
    category: "Inventory"
  },
  {
    id: "TKT-1011",
    title: "Incorrect tax calculation",
    customer: "E-Commerce Plus",
    customerEmail: "finance@ecomplus.co",
    priority: "High",
    status: "Pending",
    createdAt: "2025-05-01T11:30:00Z",
    updatedAt: "2025-05-02T09:20:00Z",
    description: "Sales tax being calculated at wrong rate (8% instead of 6.5%) for Montana customers only.",
    category: "Billing"
  },
  {
    id: "TKT-1012",
    title: "File upload permissions error",
    customer: "Creative Studio",
    customerEmail: "admin@creativestudio.design",
    priority: "Medium",
    status: "Open",
    createdAt: "2025-05-02T10:05:00Z",
    updatedAt: "2025-05-02T10:05:00Z",
    description: "Team members with Editor role unable to upload files larger than 25MB despite role permissions allowing up to 100MB.",
    category: "Permissions"
  }
];
