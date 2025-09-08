import { useCallback, useEffect, useState } from "react";
import { Palette, SwatchBook } from "lucide-react";
import { getHexColorCode } from "../utils/colorUtils";
import GradientCard from "./GradientCard";

export default function GradientGenerator() {
    const [num, setNum] = useState(16);
    const [type, setType] = useState("linear");
    const [gradients, setGradients] = useState([]);

    const generateGradients = useCallback(() => {
        const newGradients = Array.from({ length: num }).map(() => {
            const color1 = getHexColorCode();
            const color2 = getHexColorCode();
            const degree = Math.floor(Math.random() * 360);

            if (type === "linear") {
                return `linear-gradient(${degree}deg, ${color1}, ${color2})`;
            } else {
                return `radial-gradient(circle, ${color1}, ${color2})`;
            }
        });
        setGradients(newGradients);
    }, [num, type]);

    useEffect(() => {
        generateGradients();
    }, [generateGradients]);

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="w-9/12 mx-auto space-y-8">
                <div className="flex justify-between" style={{background: generateGradients[0]}}>
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        <Palette className="w-7 h-7"/> Gradient Generator - {num}{" "}
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </h1>
                    <div className="flex gap-4">
                        <input
                            type="number"
                            value={num}
                            min="1"
                            className="border border-slate-300 bg-white rounded-lg w-[60px] p-2"
                            placeholder="Number of Palettes"
                            onChange={(e) => setNum(parseInt(e.target.value) || 1)}
                        />
                        <select
                            className="border border-slate-300 w-[90px] bg-white rounded-lg p-2"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="linear">Linear</option>
                            <option value="radial">Radial</option>
                        </select>
                        <button
                            onClick={generateGradients}
                            className="bg-rose-600 hover:bg-rose-700 text-white rounded px-4 py-2 font-medium flex items-center gap-1"
                        >
                            <SwatchBook className="w-5 h-5" />
                            Generate
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {gradients.map((gradient, index) => (
                        <GradientCard key={index} gradient={gradient} />
                    ))}
                </div>
            </div>
        </div>
    );
}