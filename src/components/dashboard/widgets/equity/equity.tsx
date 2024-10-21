import EquityChart from "../../../charts/EquityChart";
import Bubble from "../../../small/bubble";
import page from "./equity.module.scss";


export default function Equity() {
    return(
      <div className={page.Wrapper}>
        <div className={page.Header}>
          <div className={page.Top}>
            <p className={page.EquityText}>Total Equity</p>
            <Bubble value={5.2}/>
          </div>
          <h1 className={page.Equity}>
            $100,000
          </h1>
        </div>
        <div className={page.Chart}>
          <EquityChart />
        </div>
      </div>
    )
}
