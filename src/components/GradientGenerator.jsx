import { useState } from "react";
import { Palette, Clipboard } from "lucide-react";
import { getHexColorCode } from "../utils/colorUtils";

export default function GradientGenerator() {
    const [num, setNum] = useState(12);
    const [type, setType] = useState("linear");

    const generateHexGradient = () => {
        const color1 = getHexColorCode();
        const color2 = getHexColorCode();
        const degree = Math.floor(Math.random() * 360);

        if (type === "linear") {
            return `linear-gradient(${degree}deg, ${color1}, ${color2})`;
        } else {
            return `radial-gradient(circle, ${color1}, ${color2})`;
        }
    };

    const handleCopy = (gradient) => {
        navigator.clipboard.writeText(gradient);
        alert("Gradient copied!");
    };

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="w-9/12 mx-auto space-y-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        <Palette className="w-7 h-7"/> Gradient Generator - {num}{" "}
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </h1>
                    <div className="flex gap-4">
                        <input
                            type="number"
                            value={num}
                            min="1"
                            className="border border-slate-300 bg-white rounded-lg w-[120px] p-2"
                            placeholder="Number of Palettes"
                            onChange={(e) => setNum(parseInt(e.target.value) || 1)}
                        />
                        <select
                            className="border border-slate-300 bg-white rounded-lg p-2"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="linear">Linear</option>
                            <option value="radial">Radial</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {Array.from({ length: num }).map((_, index) => {
                        const gradient = generateHexGradient();
                        return (
                            <div
                                key={index}
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
                    })}
                </div>
            </div>
        </div>
    );
}