import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Bounce for 3 seconds
      setIsBouncing(true);
      
      // Stop bouncing after 3 seconds
      setTimeout(() => {
        setIsBouncing(false);
      }, 3000);
    }, 5000); // Repeat every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923705978907', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className={`
          bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg
          transition-all duration-300 hover:scale-110 hover:shadow-xl
          ${isBouncing ? 'animate-bounce' : ''}
          group
        `}
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
                        bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 
                        group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
                        pointer-events-none">
          Chat with us!
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 
                          border-4 border-transparent border-l-gray-800"></div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
