import { useStore } from "../../store/useStore";

export default function TopLoader() {
  const isLoading = useStore((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 h-[2px] z-[9999] w-full bg-transparent">
      <div className="h-full w-full bg-zinc-900 animate-[progress_0.3s_ease-in-out_forwards]" />
    </div>
  );
}
