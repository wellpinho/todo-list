'use client'

import { CustomHeader } from "@/components/header";
import { useSaveTodos } from "@/hooks/useSaveTodos";

export default function Home() {
  // Monitoring all changes on todos and save in localstorage
  useSaveTodos();
  
  return (
    <div className="container mx-auto">
      <CustomHeader />
    </div>
  );
}
