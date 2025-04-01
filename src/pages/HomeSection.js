import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressBook, faCheck, faMagnifyingGlass, faToolbox } from '@fortawesome/free-solid-svg-icons';

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
            }
        })
    }

    return (
        <div className="grid grid-cols-2 h-screen content-center gap-4">
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
                <div>
                    {
                        allTools.map(element => {
                            return <div key={element.toolId}>
                                <h1>Tool Name: {element.toolName}</h1>
                                <h1>Tool Category: {element.toolCategory}</h1>
                                <h1>Tool Description: {element.toolDescription}</h1>
                                <h1>Tool Price: {element.toolPrice}</h1>
                            </div>
                        })
                    }
                    <button type="button" onClick={handleSeachAgain} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">Search for another tool</button>
                </div>
            }
        </div>
    );
}

export default HomeSection;