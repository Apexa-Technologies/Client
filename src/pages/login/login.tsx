import { Link, useNavigate } from "react-router-dom";
import Button1 from "../../components/inputs/button1";
import Input1 from "../../components/inputs/input1";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(){
        try {
            const { data }:any = await axios.post('/login', {
                "email": email,
                "password": password,
            })

            if(!data){
                console.error("No Response From Server");
            }

            if(data.error){
                console.error(data.error)
            }

            if(data.status == "success" && data.token) {
                localStorage.setItem("AUTH", data.token);
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="h-screen w-full flex justify-center items-center">
            <div className="w-1/4 h-fit bg-gradient-to-b from-purple to-darkpurple rounded-3xl flex flex-col items-center p-8 pb-3 border-2 border-pink60">
                <h1 className="text-5xl font-semibold">Apexa Journal</h1>
                <h2 className="mt-2 text-2xl opacity-80">Welcome Back!</h2>
                <div className="w-full flex flex-col items-center mt-12">
                    <Input1 
                        type="text" 
                        input="Email" 
                        id="email"
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
                    <Input1 
                        type="password" 
                        input="Password"
                        id="password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/> 
                </div>
                <div className="w-full flex flex-col items-center mt-8 mb-10">
                    <Button1 onClick={handleSubmit}/>
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