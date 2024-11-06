import Sidebar from "../components/sidebar/sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/api";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showLoadingScreen, setShowLoadingScreen] = useState(false);

    const { data, isLoading } = useQuery({
        queryKey: ["User"],
        queryFn: getUser,
        staleTime: 1000 * 60 * 5,
    });

    useEffect(() => {
        setShowLoadingScreen(true);
        const timer = setTimeout(() => setShowLoadingScreen(false), 1000);

        return () => clearTimeout(timer); // Clear timeout on unmount or location change
    }, [location]);

    if (!isLoading && !data) {
        navigate("login", { replace: true });
    }

    if (isLoading) return <h1>Loading</h1>;

    const LoadingDot = {
        display: "block",
        width: "2rem",
        height: "2rem",
        backgroundColor: "rgba(var(--secondary))",
        borderRadius: "50%",
    };

    const LoadingContainer = {
        width: "10rem",
        height: "5rem",
        display: "flex",
        justifyContent: "space-around",
    };

    const ContainerVariants = {
        initial: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        animate: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const DotVariants = {
        initial: {
            y: "0%",
        },
        animate: {
            y: "100%",
        },
    };

    const DotTransition = {
        duration: 0.5,
        yoyo: Infinity,
        ease: "easeInOut",
    };

    function ThreeDotsWave() {
        return (
            <div
                style={{
                    height: "90vh",
                    paddingTop: "5rem",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <motion.div
                    style={LoadingContainer}
                    variants={ContainerVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.span
                        style={LoadingDot}
                        variants={DotVariants}
                        transition={DotTransition}
                    />
                    <motion.span
                        style={LoadingDot}
                        variants={DotVariants}
                        transition={DotTransition}
                    />
                    <motion.span
                        style={LoadingDot}
                        variants={DotVariants}
                        transition={DotTransition}
                    />
                </motion.div>
            </div>
        );
    }

    function LoadingScreen() {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-screen w-screen fixed top-0 left-0 bg-gradient-to-br from-[#1b1a61] to-[#3e0070] z-40 justify-center items-center"
            >
                <ThreeDotsWave />
            </motion.div>
        );
    }

    if (data)
        return (
            <>
                <div className="min-h-screen min-w-full p-5 flex gap-4 overflow-hidden">
                    <div className="grow flex gap-4 overflow-y-hidden max-h-screen">
                        <Sidebar />
                        <div className="mb-10 w-full min-h-fit overflow-y-scroll">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </>
        );
}
