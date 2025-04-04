import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressBook, faCheck, faMagnifyingGlass, faToolbox, faSignature, faBook, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

function HomeSection() {
    const [toolName, setToolName] = useState("");
    const [locationPincode, setLocationPincode] = useState("");
    const [isSearchDone, setIsSearchDone] = useState(false);
    const [allTools, setAllTools] = useState([]);

    const handleToolNameChange = (e) => {
        setToolName(e.target.value);
    }

    const handlePincodeChange = (e) => {
        setLocationPincode(e.target.value);
    }

    const handleSeachAgain = (e) => {
        window.location.reload("/")
    }

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8080/mytools/findtool", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                toolName: toolName,
                locationPincode: locationPincode
            })
        }).then(async (response) => {
            if(response.ok) {
                const data = await response.json();
                setAllTools(data);
                setIsSearchDone(prev => !prev);
            } else {
                return response.json().then(errorData => {
                    throw new Error(errorData.message);   
                })                                                                                      
            }
        }).catch(error => {
            alert(error.message)
        });
    }

    return (
        <div className="grid grid-cols-2 h-screen content-center gap-4 bg-black">
            <div className="bg-red-900 grid grid-col content-center flex flex-row justify-center rounded-xl">
                <div className="font-medium text-white"><FontAwesomeIcon icon={ faMagnifyingGlass } /> Search for tools</div>
            </div>
            {
                !isSearchDone ?
                <div className="bg-red-500 rounded-xl">
                    <form className="m-auto grid align-between p-20" onSubmit={handleSearchSubmit}>
                        <div className="my-5 grid align-between">
                            <label htmlFor="name" className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faToolbox } /> Tool Name*</label>
                            <input onChange={handleToolNameChange} type="text" name="name" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" value={toolName} placeholder="Name" required/>
                        </div>
                        <div className="my-5 grid align-between">
                            <label htmlFor="pincode" className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faAddressBook } /> Pincode*</label>
                            <input onChange={handlePincodeChange} type="number" name="pincode" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" value={locationPincode} placeholder="Pincode" required/>
                        </div>
                        <div className="flex justify-between my-5">
                            <div></div>
                            <button type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"><FontAwesomeIcon icon={ faCheck } /> Find</button>
                        </div>
                    </form>
                </div> : 
                <div className="bg-red-500 rounded-xl">
                    {
                        allTools.map(element => {
                            return (
                                <div key={element.toolId} className="m-auto grid align-between p-20">
                                    <img src={element.toolImage} alt="toolImage" className="align-center mb-4 w-30 h-20 rounded-md" />
                                    <div className="grid grid-cols-2">
                                        <h1 className="text-sm font-medium text-white mb-2"><FontAwesomeIcon icon={ faSignature }/> Name: </h1>
                                        <h1 className="text-sm font-medium text-white mb-2">{element.toolName}</h1>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <h1 className="text-sm font-medium text-white mb-2"><FontAwesomeIcon icon={ faBook }/> Description: </h1>
                                        <h1 className="text-sm font-medium text-white mb-2">{element.toolDescription}</h1>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <h1 className="text-sm font-medium text-white mb-2"><FontAwesomeIcon icon={ faMoneyBill }/> Price: </h1>
                                        <h1 className="text-sm font-medium text-white mb-2">{element.toolPrice} ₹</h1>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <h1 className="text-sm font-medium text-white mb-2"><FontAwesomeIcon icon={ faSignature }/> Shop Name: </h1>
                                        <h1 className="text-sm font-medium text-white mb-2">{element.shopDetails.shopName}</h1>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <h1 className="text-sm font-medium text-white mb-2"><FontAwesomeIcon icon={ faAddressBook }/> Shop Address: </h1>
                                        <h1 className="text-sm font-medium text-white mb-2">{element.shopDetails.shopAddress}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <button type="button" onClick={handleSeachAgain} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">Search for another tool</button>
                </div>
            }
        </div>
    );
}

export default HomeSection;