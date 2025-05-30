import React from "react";
import { Button } from "@/components/ui/button";  // Import from the alias path

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 gap-4">
      <h1 className="text-6xl text-white font-bold">Hello, Tailwind CSS!</h1>
      <Button variant="default">Default Button</Button>
      <Button variant="destructive" size="lg">Destructive Large</Button>
      <Button variant="outline" size="sm">Outline Small</Button>
      <Button variant="ghost" size="icon" aria-label="Settings">
        {/* You can put an icon here if you want */}
        ⚙️
      </Button>
    </div>
  );
}

export default App;
