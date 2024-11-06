import Calculator from "../../components/dashboard/widgets/calculator/calculator";
import CurrentDay from "../../components/dashboard/widgets/current/currentDay";
import Days from "../../components/dashboard/widgets/days/days";
import Equity from "../../components/dashboard/widgets/equity/equity";
import Notes from "../../components/dashboard/widgets/notes/notes";
import Trades from "../../components/dashboard/widgets/trades/trades";
import DashboardTopbar from "../../components/topbar/dashboard/dashboard";

export default function DashboardPage() {
    return (
        <div className="flex pb-10 gap-4 h-screen flex-col overflow-y-scroll">
            <DashboardTopbar />
            <div className="h-fit flex flex-wrap gap-5">
                {/* Left Section */}
                <section className="h-full w-4/6 flex flex-col gap-5">
                    {/* Equity */}
                    <div className="bg-primary w-full rounded-[2rem] overflow-hidden min-h-[28rem]">
                        <Equity />
                    </div>

                    {/* Left Bottom */}
                    <section className="flex gap-5">
                        <div className="bg-primary w-1/2 rounded-[2rem]">
                            <Notes />
                        </div>
                        <div className="flex flex-col w-1/2 gap-5">
                            <div className="bg-primary w-full h-fit rounded-[2rem]">
                                <CurrentDay />
                            </div>
                            <div className="bg-primary w-full grow rounded-[2rem]">
                                <Calculator />
                            </div>
                        </div>
                    </section>
                </section>

                {/* Right Section */}
                <section className="grow flex flex-col gap-5">
                    {/* Trades */}
                    <div className="bg-primary rounded-[2rem] w-full grow">
                        <Trades />
                    </div>
                    {/* Days */}
                    <div className="bg-primary rounded-[2rem] h-fit first:w-full grow">
                        <Days />
                    </div>
                </section>
            </div>
        </div>
    );
}
