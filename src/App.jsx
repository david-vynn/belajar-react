import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer Berjalan...");
    }, 1000);
    
    const berhenti = setTimeout(() => {
      clearInterval(timer)
      console.log("TImer dihentikan");
    }, 5000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(berhenti);
    }
    
  }, []);

  return <h2>TImer sedang berjalan</h2>
}

export default Timer;