import { useSaveTodos } from "@/hooks/useSaveTodos";

export default function Home() {
  // Monitoring all changes on todos and save in localstorage
  useSaveTodos();
  
  return (
    <div>

    </div>
  );
}
