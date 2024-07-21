export default function DashboardPage() {
    return (
        <div className="h-full flex flex-wrap gap-5 overflow-y-scroll">
            {/* Left Section */}
            <section className="h-full w-4/6 flex flex-col gap-5">
                {/* Equity */}
                <div className="bg-purple w-full h-1/2 rounded-3xl"></div>

                {/* Left Bottom */}
                <section className="flex gap-5 grow">
                    <div className="bg-purple w-1/2 rounded-3xl"></div>
                    <div className="bg-purple w-1/2 rounded-3xl"></div>
                </section>
            </section>

            {/* Right Section */}
            <section className="grow flex flex-col gap-5">
                <div className="bg-purple rounded-3xl w-full h-full"></div>
            </section>
        </div>
    );
}
