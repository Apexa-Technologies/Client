import { useState } from "react";
import Button1 from "../../components/inputs/button1";
import Input1 from "../../components/inputs/input1";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SetupPage() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [equity, setEquity] = useState(0);

    const handleNextStep = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        try {
            const { data }: any = await axios.post("/setup", {
                first: firstName,
                last: lastName,
                email: email,
                password: password,
                equity: equity,
            });

            if (!data) {
                console.error("No Response From Server");
            }

            if (data.error) {
                console.error(data.error);
            }

            if (data.status == "success" && data.token) {
                localStorage.setItem("AUTH", data.token);
                navigate("/dashboard");
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-1/4 h-fit bg-gradient-to-b from-purple to-darkpurple rounded-3xl flex flex-col items-center p-8 pb-3 border-2 border-pink60">
                <h1 className="text-5xl font-semibold">Apexa Journal</h1>
                <h2 className="mt-4 text-2xl opacity-80">
                    Let's Get You Set Up!
                </h2>

                <div className="w-full flex flex-col items-center mt-8">
                    {step === 1 && (
                        <>
                            <Input1
                                type="text"
                                input="First Name"
                                id="first"
                                value={firstName}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setFirstName(e.target.value)}
                            />
                            <Input1
                                type="text"
                                input="Last Name"
                                id="last"
                                value={lastName}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setLastName(e.target.value)}
                            />
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <Input1
                                type="text"
                                input="Email"
                                id="email"
                                value={email}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setEmail(e.target.value)}
                            />
                            <Input1
                                type="password"
                                input="Password"
                                id="password"
                                value={password}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setPassword(e.target.value)}
                            />
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <Input1
                                type="number"
                                input="Current Equity"
                                id="equity"
                                value={equity}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setEquity(parseFloat(e.target.value) || 0)}
                            />
                        </>
                    )}
                </div>

                <div className="w-full flex flex-col items-center mt-8 mb-10">
                    <Button1 onClick={handleNextStep} />
                </div>

                <div className="flex w-full gap-8 justify-center">
                    <a className="opacity-80 font-light hover:underline hover:opacity-60 hover:cursor-pointer">
                        Forgot Password
                    </a>
                    <a
                        className="opacity-80 font-light hover:underline hover:opacity-60 hover:cursor-pointer"
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Account Login
                    </a>
                </div>
            </div>
        </div>
    );
}
