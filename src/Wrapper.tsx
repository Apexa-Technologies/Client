import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Wrapper() {
    return (
        <div className="h-full w-full">
            <Outlet />
            <Toaster position="bottom-right" />
            <ReactQueryDevtools initialIsOpen={false} />
        </div>
    );
}
