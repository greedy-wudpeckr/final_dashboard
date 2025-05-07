import { TicketProvider } from "../context/TicketContext";
import TicketList from "../components/TicketList";
import TicketDetail from "../components/TicketDetail";
import Header from "../components/Header";
import { useTicketContext } from "../context/TicketContext";
import { useState, useEffect } from "react";

// This wrapper component uses the context after it's been initialized
const Dashboard = () => {
  const { selectedTicket, darkMode } = useTicketContext();
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  // Add responsive behavior based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setScreenSize({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024
      });
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { isMobile, isTablet, isDesktop } = screenSize;
  const showMobileView = isMobile && selectedTicket;
  const showSideBySide = (isTablet || isDesktop) && selectedTicket;
  const listColumnSpan = showSideBySide ? 'lg:col-span-5' : 'lg:col-span-12';

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
          {showMobileView ? (
            // On mobile, show only the ticket detail when selected
            <div className="h-[calc(100vh-120px)] overflow-y-auto">
              <button 
                onClick={() => window.history.back()}
                className="mb-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md bg-primary text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                ← Back to list
              </button>
              <TicketDetail />
            </div>
          ) : (
            // Otherwise show the responsive grid
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className={`${listColumnSpan} h-[calc(100vh-120px)] overflow-y-auto transition-all duration-300`}>
                <TicketList />
              </div>
              
              {showSideBySide && (
                <div className="lg:col-span-7 h-[calc(100vh-120px)] overflow-y-auto">
                  <TicketDetail />
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Main component that provides the context
const Index = () => {
  return (
    <TicketProvider>
      <Dashboard />
    </TicketProvider>
  );
};

export default Index;