interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  colors: string[];
  paletteId: string;
}

export default function ExportModal({
  isOpen,
  onClose,
  colors,
  paletteId,
}: ExportModalProps) {
  if (!isOpen) return null;

  const downloadSVG = () => {
    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
        <rect x="0" y="0" width="800" height="250" fill="${colors[0]}"/>
        <rect x="0" y="250" width="800" height="250" fill="${colors[1]}"/>
        <rect x="0" y="500" width="800" height="250" fill="${colors[2]}"/>
        <rect x="0" y="750" width="800" height="250" fill="${colors[3]}"/>
      </svg>
    `;
    const blob = new Blob([svgString], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    triggerDownload(url, `palette-${paletteId}.svg`);
  };

  const downloadCanvas = (format: "png" | "jpeg") => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const blockHeight = 250;
    colors.forEach((color, index) => {
      ctx.fillStyle = color;
      ctx.fillRect(0, index * blockHeight, 800, blockHeight);
    });

    const mimeType = format === "png" ? "image/png" : "image/jpeg";
    const quality = format === "jpeg" ? 0.9 : undefined;

    canvas.toBlob(
      (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        triggerDownload(url, `palette-${paletteId}.${format}`);
      },
      mimeType,
      quality,
    );
  };

  const triggerDownload = (url: string, filename: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col md:flex-row h-auto md:h-[480px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 z-10 text-zinc-500"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="w-full md:w-1/3 p-8 flex flex-col justify-center gap-3 border-b md:border-b-0 md:border-r border-zinc-100">
          <h2
            className="text-[24px] mb-1 text-zinc-900"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <em className="not-italic italic">Export palette</em>
          </h2>
          <p className="text-[13px] text-zinc-500 mb-3 leading-relaxed">
            Choose a format to download this palette.
          </p>

          <button
            onClick={downloadSVG}
            className="w-full py-2.5 bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 rounded-lg text-[13.5px] font-medium text-zinc-700 transition-colors flex items-center justify-center gap-2"
          >
            SVG
          </button>
          <button
            onClick={() => downloadCanvas("png")}
            className="w-full py-2.5 bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-300 rounded-lg text-[13.5px] font-medium text-zinc-700 transition-colors flex items-center justify-center gap-2"
          >
            PNG
          </button>
          <button
            onClick={() => downloadCanvas("jpeg")}
            className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-700 rounded-lg text-[13.5px] font-medium text-white transition-colors flex items-center justify-center gap-2"
          >
            JPEG
          </button>
        </div>

        <div className="w-full md:w-2/3 p-6 flex items-center justify-center bg-zinc-50">
          <div className="w-full max-w-sm h-[380px] rounded-xl overflow-hidden border border-zinc-200 flex flex-col">
            {colors.map((color, i) => (
              <div
                key={i}
                className="flex-1"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
