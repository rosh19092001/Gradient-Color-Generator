import { Clipboard } from "lucide-react";
import { toast } from 'react-toastify';

export default function GradientCard({ gradient }) {
    const handleCopy = (gradient) => {
        navigator.clipboard.writeText(gradient);
        toast.success("Gradient copied to clipboard!");
    };

    return (
        <div
            className="h-[180px] rounded-xl relative shadow-md"
            style={{ background: gradient }}
        >
            <button
                onClick={() => handleCopy(gradient)}
                className="bg-black/50 hover:bg-black text-white rounded absolute bottom-3 right-3 px-2 py-1.5 text-xs font-medium flex items-center gap-1"
            >
                <Clipboard className="w-3 h-3"/> Copy
            </button>
        </div>
    );
}