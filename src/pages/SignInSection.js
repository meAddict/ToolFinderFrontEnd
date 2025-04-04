import { useState } from "react";
import ToolsSection from "./tools/ToolsSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDoorClosed, faDoorOpen, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

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
            } else {
                return response.json().then(errorData => {
                    throw new Error(errorData.message);   
                })                                                                                      
            }
        }).catch(error => {
            console.log(error.message);
            alert(error.message)
        });
    }
    
    return (
        <div>
            {!isSignInComplete ? 
            <div className="grid grid-cols-2 h-screen content-center gap-4 bg-black">
                <div className="bg-red-900 grid grid-col content-center flex flex-row justify-center rounded-xl">
                    <div className="font-medium text-white"><FontAwesomeIcon icon={ faDoorOpen } /> Sign In Here</div>
                </div>
                <div className="my-auto bg-red-500 rounded-xl">
                    <form className="m-auto grid align-between p-20" onSubmit={handleSignInFormSubmit}>
                        <div className="my-5 grid align-between">
                            <label htmlFor="shopEmail" className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faEnvelope } /> Email*</label>
                            <input onChange={handleShopEmailChange} type="text" name="shopEmail" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Email" value={emailValue} required/>
                        </div>
                        <div className="my-5 grid align-between">
                            <label htmlFor="shopPassword" className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faKey } /> Password*</label>
                            <input onChange={handleShopPasswordChange} type="password" name="shopPassword" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Password" value={passwordValue} required/>
                        </div>
                        <div className="flex justify-between my-5">
                            <div></div>
                            <button type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"><FontAwesomeIcon icon={ faDoorClosed } /> Sign In</button>
                        </div>
                    </form>
                </div>
            </div> : <ToolsSection sendShopIdValue={shopIdVal} />}
        </div>
    );
}

export default SignInSection;