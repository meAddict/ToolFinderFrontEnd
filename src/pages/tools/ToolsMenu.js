import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function ToolsMenu({ sendShopIdValue, transferIsAddTool }) {
    const [isAddTool, setIsAddTool] = useState(false);

    const handleAddTools = () => {
        setIsAddTool(prev => !prev);
    }

    const handleDeleteAccount = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8080/mytools/deleteshop", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shopId: sendShopIdValue
            })
        }).then(async (response) => {
            if(response.ok) {
                window.location.reload("/");
            }
        })
    }

    useEffect(() => {
        transferIsAddTool(isAddTool);
    }, [isAddTool, transferIsAddTool])

    return (
        <div className="bg-black">
            {
                !isAddTool ? 
                <div>
                    <button type="button" onClick={handleAddTools} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 m-3"><FontAwesomeIcon icon={ faPlus }/> Add Tools</button>
                    <button onClick={handleDeleteAccount} type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 m-3"><FontAwesomeIcon icon={ faTrash } /> Delete my account</button>
                </div> : 
                <button type="button" onClick={handleAddTools} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 m-3">Back to list</button>
            }
        </div>
    )
}

export default ToolsMenu;