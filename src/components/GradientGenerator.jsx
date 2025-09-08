import { useState } from "react";
import {Palette} from "lucide-react";
import { getHexColorCode } from "../utils/colorUtils";

export default function GradientGenerator() {
    const [num, setNum] = useState(12)
    const [type, setType] = useState("linear")
    const color = getHexColorCode();

    return (
        <>
            <div className="min-h-screen bg-white py-12">
                <div className="w-9/12 mx-auto space-y-8">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold flex items-center gap-2">
                            <Palette className="w-7 h-7" /> Gradient Generator - {num} {type.charAt(0).toUpperCase() + type.slice(1)}
                        </h1>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={num}
                                className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
                                placeholder="Number of Color pallete"
                                onChange={(e) => setNum(e.target.value)}
                            />
                            <select className="border border-slate-300 bg-white rounded-lg p-2" onChange={(e) => setType(e.target.value)}>
                                <option value="linear">Linear</option>
                                <option value="radial">Radial</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        <div className="h-[180px] rounded-xl" style={{backgroundColor: color}}></div>
                    </div>
                </div>
            </div>
        </>
    )
}