import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpSection() {
    const navigate = useNavigate();

    const [nameValue, setNameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneNumberValue, setPhoneNumberValue] = useState("");
    const [addressValue, setAddressValue] = useState("");
    const [pincodeValue, setPincodeValue] = useState("");
    const [cityValue, setCityValue] = useState("");
    const [stateValue, setStateValue] = useState("");

    const handleShopNameChange = (e) => {
        setNameValue(e.target.value);
    }

    const handleShopPasswordChange = (e) => {
        setPasswordValue(e.target.value);
    }

    const handleShopEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handleShopPhoneNoChange = (e) => {
        setPhoneNumberValue(e.target.value);
    }

    const handleShopAddressChange = (e) => {
        setAddressValue(e.target.value);
    }

    const handleShopPincodeChange = (e) => {      
        setPincodeValue(e.target.value);
    }

    const handleShopCityChange = (e) => {
        setCityValue(e.target.value);
    }

    const handleShopStateChange = (e) => {
        setStateValue(e.target.value);
    }

    const handleSignUpFormSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8080/mytools/createshop", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shopName: nameValue,
                shopPassword: passwordValue,
                shopEmail: emailValue,
                shopPhoneNo: phoneNumberValue,
                shopAddress: addressValue,
                shopPincode: pincodeValue,
                shopCity: cityValue,
                shopState: stateValue
            })
        }).then(async (response) => {
            if(response.ok) {
                navigate("/");
            }
        })
    }
    
    return (
        <div className="my-auto bg-red-500">
            <form className="m-auto grid align-between p-20" onSubmit={handleSignUpFormSubmit}>
                <div>
                    <label htmlFor="" className="text-lg/6 font-medium text-white">Sign Up Here !</label>
                </div>
                <div className="my-5 grid align-between">
                    <label htmlFor="shopName" className="text-sm/6 font-medium text-white">Name*</label>
                    <input onChange={handleShopNameChange} type="text" name="shopName" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Name" value={nameValue} required/>
                </div>
                <div className="my-5 grid align-between">
                    <label htmlFor="shopPassword" className="text-sm/6 font-medium text-white">Password*</label>
                    <input onChange={handleShopPasswordChange} type="password" name="shopPassword" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Password" value={passwordValue} required/>
                </div>
                <div className="my-5 grid align-between">
                    <label htmlFor="shopEmail" className="text-sm/6 font-medium text-white">Email*</label>
                    <input onChange={handleShopEmailChange} type="text" name="shopEmail" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Email" value={emailValue} required/>
                </div>
                <div className="my-5 grid align-between">
                    <label htmlFor="shopPhoneNo" className="text-sm/6 font-medium text-white">Phone No.*</label>
                    <input onChange={handleShopPhoneNoChange} type="tel" size={10} name="shopPhoneNo" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Phone No." value={phoneNumberValue} required/>
                </div>
                <div className="my-5 grid align-between">
                    <label htmlFor="shopAddress" className="text-sm/6 font-medium text-white">Adress*</label>
                    <input onChange={handleShopAddressChange} type="text" name="shopAddress" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Address" value={addressValue} required/>
                </div>
                <div className="my-5 grid align-between">
                    <label htmlFor="shopPincode" className="text-sm/6 font-medium text-white">Pincode*</label>
                    <input onChange={handleShopPincodeChange} type="number" size={6} name="shopPincode" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Pincode" value={pincodeValue} required/>
                </div>
                <div className="my-5 grid align-between">
                    <label htmlFor="shopCity" className="text-sm/6 font-medium text-white">City*</label>
                    <input onChange={handleShopCityChange} type="text" name="shopCity" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="City" value={cityValue} required/>
                </div>
                <div className="my-5 grid align-between">
                    <label htmlFor="shopState" className="text-sm/6 font-medium text-white">State*</label>
                    <input onChange={handleShopStateChange} type="text" name="shopState" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="State" value={stateValue} required/>
                </div>
                <div className="flex justify-between my-5">
                    <div></div>
                    <button type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUpSection;