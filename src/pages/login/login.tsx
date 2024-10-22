import { Link, useNavigate } from "react-router-dom";
import Button1 from "../../components/inputs/button1";
import Input1 from "../../components/inputs/input1";

export default function LoginPage() {
    const navigate = useNavigate();
    return(
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-1/4 h-fit bg-gradient-to-b from-purple to-darkpurple rounded-3xl flex flex-col items-center p-8 pb-3 border-2 border-pink60">
                <h1 className="text-5xl font-semibold">Apexa Journal</h1>
                <h2 className="mt-2 text-2xl opacity-80">Welcome Back!</h2>
                <div className="w-full flex flex-col items-center mt-12">
                    <Input1 type="text" input="Email"/>
                    <Input1 type="password" input="Password"/>
                </div>
                <div className="w-full flex flex-col items-center mt-8 mb-10">
                    <Button1 />
                </div>
                <div className="flex w-full gap-8 justify-center">
                    <a className="opacity-80 font-light hover:underline hover:opacity-60 hover:cursor-pointer">Forgot Password</a>
                    <a className="opacity-80 font-light hover:underline hover:opacity-60 hover:cursor-pointer"
                        onClick={() => {
                            navigate('/setup')
                        }}
                    >
                        Create Account
                    </a>
                </div>
            </div>
        </div>
    )
}