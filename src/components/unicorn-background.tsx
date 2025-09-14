"use client";

import UnicornScene from "unicornstudio-react/next";

export function UnicornStudioBackground() {
  return (
    <div className="absolute mx-auto top-0 right-0 left-0 w-full h-screen -z-10">
      <UnicornScene 
        projectId="ZHhDKfVqqu8PKOSMwfuA"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}