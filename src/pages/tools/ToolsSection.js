import { useState } from "react";
import ToolsAddition from "./ToolsAddition";
import ToolsView from "./ToolsMenu";
import ToolsShow from "./ToolsShow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToolsSection({ sendShopIdValue }) {
    const [isAddTool, setIsAddTool] = useState(false);

    const handleIsAddTool = (val) => {
        setIsAddTool(val);
    }

    const handleIsToolAddtionDone = (val) => {
        setIsAddTool(!val);
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

    return (
        <div className="my-auto bg-red-500">
            <ToolsView transferIsAddTool={handleIsAddTool} />
            {
                isAddTool ? <ToolsAddition transferIsToolAdditionDone={handleIsToolAddtionDone} sendShopIdValue={sendShopIdValue} /> : 
                <ToolsShow sendShopIdValue={sendShopIdValue} />
            }
            <button onClick={handleDeleteAccount} type="button" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"><FontAwesomeIcon icon={ faTrash } /> Delete my account</button>
        </div>
    )
}

export default ToolsSection;