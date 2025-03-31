import { useState } from "react";
import ToolsSection from "./tools/ToolsSection";

function SignInSection() {
    const [passwordValue, setPasswordValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [isSignInComplete, setIsSignInComplete] = useState(false);
    const [shopIdVal, setShopIdVal] = useState("");

    const handleShopPasswordChange = (e) => {
        setPasswordValue(e.target.value);
    }

    const handleShopEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handleSignInFormSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8080/mytools/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shopEmail: emailValue,
                shopPassword: passwordValue
            })
        }).then(async (response) => {
            if(response.ok) {
                const data = await response.json();
                setShopIdVal(data.shopId);
                setIsSignInComplete(prevVal => !prevVal);
            }
        })
    }
    
    return (
        <div>
            {!isSignInComplete ? 
            <div className="my-auto bg-red-500">
                <form className="m-auto grid align-between p-20" onSubmit={handleSignInFormSubmit}>
                    <div>
                        <label htmlFor="" className="text-lg/6 font-medium text-white">Sign In Here !</label>
                    </div>
                    <div className="my-5 grid align-between">
                        <label htmlFor="shopEmail" className="text-sm/6 font-medium text-white">Email*</label>
                        <input onChange={handleShopEmailChange} type="text" name="shopEmail" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Email" value={emailValue} required/>
                    </div>
                    <div className="my-5 grid align-between">
                        <label htmlFor="shopPassword" className="text-sm/6 font-medium text-white">Password*</label>
                        <input onChange={handleShopPasswordChange} type="password" name="shopPassword" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Password" value={passwordValue} required/>
                    </div>
                    <div className="flex justify-between my-5">
                        <div></div>
                        <button type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">Sign In</button>
                    </div>
                </form>
            </div> : <ToolsSection sendShopIdValue={shopIdVal} />}
        </div>
    );
}

export default SignInSection;