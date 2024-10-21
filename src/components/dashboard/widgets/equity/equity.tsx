import EquityChart from "../../../charts/EquityChart";
import page from "./equity.module.scss";


export default function Equity() {
    return(
      <div className={page.Wrapper}>
        <div className={page.Header}>
          <h1 className={page.EquityText}>
            $100,000
          </h1>
        </div>
        <div className="w-full h-full">
          <EquityChart />
        </div>
      </div>
    )
}
