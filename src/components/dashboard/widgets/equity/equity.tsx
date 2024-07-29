import { LineChart, Line, Tooltip, YAxis } from "recharts";
import page from "./equity.module.scss";

export default function Equity() {
    const data = [
        { name: "Page A", uv: 100, pv: 100, amt: 100 },
        { name: "Page B", uv: 250, pv: 2400, amt: 2400 },
        { name: "Page c", uv: 300, pv: 350, amt: 210 },
        { name: "Page D", uv: 350, pv: 1000, amt: 2400 },
    ];
    return (
        <LineChart
            width={1220}
            height={450}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            className={page.Chart}
        >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <YAxis />
        </LineChart>
    );
}
