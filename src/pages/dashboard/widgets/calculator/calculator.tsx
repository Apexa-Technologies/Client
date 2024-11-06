import { useState } from "react";
import Input1 from "../../../../components/inputs/input1";
import Button2 from "../../../../components/inputs/button2";

export default function Calculator() {
    const [entry, setEntry] = useState<number | null>(null);
    const [stop, setStop] = useState<number | null>(null);
    const [risk, setRisk] = useState<number | null>(null);
    return (
        <div className="w-full flex flex-col p-5 h-full grow">
            <h1 className="text-4xl">Quick Calculator</h1>
            <div className="flex flex-col h-full w-full grow mt-5 items-center">
                <div className="mb-3 w-full">
                    <Input1
                        type="number"
                        input="Entry Price"
                        value={entry !== null ? entry : ""}
                        id="EntryCalculator"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEntry(parseFloat(e.target.value))
                        }
                    />
                </div>

                <div className="mb-3 w-full">
                    <Input1
                        type="number"
                        input="Stop Loss"
                        value={stop !== null ? stop : ""}
                        id="StopCalculator"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setStop(parseFloat(e.target.value))
                        }
                    />
                </div>
                <div className="mb-3 w-full">
                    <Input1
                        type="number"
                        input="Risk Amount"
                        value={risk !== null ? risk : ""}
                        id="RiskCalculator"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setRisk(parseFloat(e.target.value))
                        }
                    />
                </div>
                <div className="w-full h-12 mt-4">
                    <Button2 text="Calculate" />
                </div>
            </div>
        </div>
    );
}
