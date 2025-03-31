import { useEffect, useState } from "react";
import EachToolView from "./EachToolView";

function ToolsShow({ sendShopIdValue }) {
    const [allTools, setAllTools] = useState([]);

    const handleFindAllTools = async () => {
        await fetch("http://127.0.0.1:8080/mytools/showtool", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shopId: sendShopIdValue
            })
        }).then(async (response) => {
            if(response.ok) {
                const data = await response.json();
                setAllTools(data);
            }
        })
    }

    useEffect(() => {
        handleFindAllTools();
    }, )

    return (
        <div>
            {
                allTools.map(element => {
                    return <EachToolView key={element.toolId} sendEachTool={element} />
                })
            }
        </div>
    )
}

export default ToolsShow;