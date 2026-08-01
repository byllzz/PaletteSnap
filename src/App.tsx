import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { useSyncWithURL } from "./hooks/useSyncWithURL";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { useStore } from "./store/useStore";

function SyncState() {
  useSyncWithURL();
  return null;
}

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  // load palettes + this device's likes from Supabase on first mount
  const fetchPalettes = useStore((s) => s.fetchPalettes);
  useEffect(() => {
    fetchPalettes();
  }, [fetchPalettes]);

  return (
    <BrowserRouter>
      <SyncState />
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
