import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { faBook, faFloppyDisk, faImage, faMoneyBill, faScrewdriverWrench, faSignature, faSquarePlus } from "@fortawesome/free-solid-svg-icons";

function ToolsAddition({ transferIsToolAdditionDone, sendShopIdValue }) {
    const [nameValue, setName] = useState("");
    const [categoryValue, setCategory] = useState("");
    const [descriptionValue, setDescription] = useState("");
    const [priceValue, setPrice] = useState("");
    const [imageValue, setImage] = useState("");
    const [isToolAdditionDone, setIsToolAdditionDone] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const handleImageChange = (e) => {
        setImage(e.target.value);
    }

    const handleSignUpFormSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8080/mytools/addtool", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shopId: sendShopIdValue,
                toolDetails: {
                    toolName: nameValue,
                    toolCategory: categoryValue,
                    toolDescription: descriptionValue,
                    toolPrice: priceValue,
                    toolImage: imageValue
                }
            })
        }).then(async (response) => {
            if(response.ok) {
                alert("Tool addition done. Add more tools or return to tool list");
                setIsToolAdditionDone(prev => !prev)
            }
        })
    }

    useEffect(
        () => {
            transferIsToolAdditionDone(isToolAdditionDone)
        }, [isToolAdditionDone, transferIsToolAdditionDone]
    )

    return (
        <div className="grid grid-cols-2 my-20 content-center gap-4">
            <div className="bg-red-900 grid grid-col content-center flex flex-row justify-center rounded-xl">
                <div className="font-medium text-white"><FontAwesomeIcon icon={ faSquarePlus } /> Enter the tool details</div>
            </div>
            <div  className="my-auto bg-red-500 rounded-xl">
                <form className="m-auto grid align-between p-20" onSubmit={handleSignUpFormSubmit}>
                    <div className="my-5 grid align-between">
                        <label htmlFor="shopName" className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faSignature } /> Name*</label>
                        <input onChange={handleNameChange} type="text" name="shopName" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Name" value={nameValue} required/>
                    </div>
                    <div className="my-5 grid align-between">
                        <label htmlFor="shopPassword" className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faScrewdriverWrench } /> Category*</label>
                        <input onChange={handleCategoryChange} type="text" name="shopPassword" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Category" value={categoryValue} required/>
                    </div>
                    <div className="my-5 grid align-between">
                        <label htmlFor="shopEmail" className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faBook } /> Description*</label>
                        <input onChange={handleDescriptionChange} type="text" name="shopEmail" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Description" value={descriptionValue} required/>
                    </div>
                    <div className="my-5 grid align-between">
                        <label htmlFor="shopPhoneNo" className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faMoneyBill } /> Price*</label>
                        <input onChange={handlePriceChange} type="text" size={10} name="shopPhoneNo" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Price" value={priceValue} required/>
                    </div>
                    <div className="my-5 grid align-between">
                        <label htmlFor="shopPhoneNo" className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faImage } /> Image</label>
                        <input onChange={handleImageChange} type="file" size={10} name="shopPhoneNo" className="rounded-md bg-white min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="Source" value={imageValue} />
                    </div>
                    <div className="flex justify-between my-5">
                        <div></div>
                        <button type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"><FontAwesomeIcon icon={ faFloppyDisk } /> Add Tool</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ToolsAddition;