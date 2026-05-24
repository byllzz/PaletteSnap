import { useNavigate } from 'react-router-dom';

interface Plate {
  id: string;
  title: string;
  colors: string[];
  weights: number[];
  names: string[];
  kanji: string;
}

interface PlateCardProps {
  plate: Plate;
}

export default function PlateCard({ plate }: PlateCardProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/plateDetails', { state: { plate: plate } });
  };

  return (
    <div className="group relative bg-[#0f0f0f] border border-zinc-900 p-4 rounded-sm hover:border-zinc-700 transition-all duration-500">

      {/* The Color "Chord" Display */}
      <div className="flex h-64 w-full overflow-hidden rounded-sm cursor-pointer shadow-2xl" onClick={handleNavigate}>
        {plate.colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              flex: plate.weights[index]
            }}
            className="h-full transition-transform duration-700 hover:scale-[1.05] relative group/color"
          >
            {/* Hex code tooltip on hover */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/color:opacity-100 transition-opacity bg-black/50 backdrop-blur-md text-[10px] text-white px-2 py-1 rounded-full font-mono uppercase tracking-widest">
              {color}
            </span>
          </div>
        ))}
      </div>

      {/* Card Details */}
      <div className="mt-6 flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-zinc-600 tracking-tighter">
              NO. {plate.id}
            </span>
            <div className="w-4 h-[1px] bg-zinc-800"></div>
          </div>
          <h3 className="font-fair text-xl text-zinc-200 group-hover:text-white transition-colors">
            {plate.title}
          </h3>
          <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">
            {plate.names.join(' + ')}
          </p>
        </div>

        {/* Japanese Kanji Vertical Label */}
        <div className="text-right">
          <p className="font-fair text-2xl text-zinc-700 italic opacity-50 select-none"
             style={{ writingMode: 'vertical-rl' }}>
            {plate.kanji}
          </p>
        </div>
      </div>

      {/* "Red Seal" Hover Element */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-transparent border-r-[30px] border-r-transparent group-hover:border-r-[#b91c1c] transition-all duration-500 opacity-20"></div>
    </div>
  );
}
