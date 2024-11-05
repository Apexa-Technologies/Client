export default function NewsPage() {
    return (
        <div className="min-h-full h-fit flex flex-wrap gap-5 overflow-y-hidden">
            <section className="grow-[2] flex flex-col gap-5">
                <div className="grow bg-primary rounded-[2rem]"></div>
                <div className="grow-[3] bg-primary rounded-[2rem]"></div>
            </section>
            <section className="grow flex flex-col gap-5 h-fit">
                <div className="grow bg-primary rounded-[2rem] h-[30em] min-h-fit"></div>
                <div className="grow bg-primary rounded-[2rem] h-[30em] min-h-fit"></div>
            </section>
        </div>
    );
}
