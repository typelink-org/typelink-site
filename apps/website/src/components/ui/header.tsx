import React from "react";

function Header() {
  return (
    <header className="sticky top-0 w-full bg-background/80 border-b border-border z-50">
      <div className="container mx-auto">
        <nav className="flex justify-center items-center h-16 px-4">
          <span className="text-2xl font-bold tracking-tight text-primary flex items-center gap-1">
            Typelink.ai
            <sup className="text-xs align-super ml-1">®</sup>
          </span>
        </nav>
      </div>
    </header>
  );
}

export { Header }; 