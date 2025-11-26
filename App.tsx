import React from 'react';
import { AccessCard } from './components/AccessCard';

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#f1f5f9] custom-scrollbar overflow-y-auto">
      <div className="fixed inset-0 pointer-events-none">
         {/* Subtle pattern or shapes if needed, simplified for now */}
         <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-blue-100/50 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full flex justify-center">
        <AccessCard />
      </div>

      <footer className="fixed bottom-2 w-full text-center text-[10px] text-gray-400 font-medium pointer-events-none hidden sm:block">
        © 2024 Tin Học Cơ Bản
      </footer>
    </div>
  );
}

export default App;