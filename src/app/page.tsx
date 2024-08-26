'use client'

import { useSaveTodos } from "@/hooks/useSaveTodos";

export default function Home() {
  // Monitoring all changes on todos and save in localstorage
  useSaveTodos();
  
  return (
    <div>
      <h1>todo</h1>
    </div>
  );
}
