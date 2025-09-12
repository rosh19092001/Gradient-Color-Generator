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
            const degree = Math.floor(Math.random() * 360);

            if (type === "conic") {
                const colorCount = Math.floor(Math.random() * 3) + 3;
                const colors = Array.from({ length: colorCount }).map(() => getHexColorCode());
                const colorStops = colors.join(", ");
                return `conic-gradient(from ${degree}deg, ${colorStops})`;
            }else{
                const color1 = getHexColorCode();
                const color2 = getHexColorCode();

                if (type === "linear") {
                    return `linear-gradient(${degree}deg, ${color1}, ${color2})`;
                } else {
                    return `radial-gradient(circle, ${color1}, ${color2})`;
                }
            }
        });
        setGradients(newGradients);
    }, [num, type]);

    useEffect(() => {
        generateGradients();
    }, [generateGradients]);

    return (
        <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-4 rounded-lg shadow border border-slate-50">
                    <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
                        <Palette className="w-6 h-6 sm:w-7 sm:h-7" /> Gradient Generator –{" "}
                        {num} {type.charAt(0).toUpperCase() + type.slice(1)}
                    </h1>

                    <div className="flex flex-wrap gap-3">
                        <input
                            type="number"
                            value={num}
                            min="1"
                            className="border border-slate-300 bg-white rounded-lg w-[70px] p-2 text-sm"
                            placeholder="Count"
                            onChange={(e) => setNum(parseInt(e.target.value) || 1)}
                        />
                        <select
                            className="border border-slate-300 w-[100px] bg-white rounded-lg p-2 text-sm"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="linear">Linear</option>
                            <option value="radial">Radial</option>
                            <option value="conic">Conic</option>
                        </select>
                        <button
                            onClick={generateGradients}
                            className="bg-rose-600 hover:bg-rose-700 text-white rounded px-3 sm:px-4 py-2 text-sm font-medium flex items-center gap-1"
                        >
                            <SwatchBook className="w-4 h-4 sm:w-5 sm:h-5" />
                            Generate
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {gradients.map((gradient, index) => (
                        <GradientCard key={index} gradient={gradient} />
                    ))}
                </div>
            </div>
        </div>
    );
}