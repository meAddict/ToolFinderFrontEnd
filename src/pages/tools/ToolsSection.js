import { useState } from "react";
import ToolsAddition from "./ToolsAddition";
import ToolsMenu from "./ToolsMenu";
import ToolsShow from "./ToolsShow";

function ToolsSection({ sendShopIdValue }) {
    const [isAddTool, setIsAddTool] = useState(false);

    const handleIsAddTool = (val) => {
        setIsAddTool(val);
    }

    const handleIsToolAddtionDone = (val) => {
        setIsAddTool(!val);
    }

    return (
        <div className="my-auto bg-red-500">
            <ToolsMenu sendShopIdValue={sendShopIdValue} transferIsAddTool={handleIsAddTool} />
            {
                isAddTool ? <ToolsAddition transferIsToolAdditionDone={handleIsToolAddtionDone} sendShopIdValue={sendShopIdValue} /> : 
                <div className="grid grid-cols-2 h-screen content-center gap-4 bg-black">
                    <ToolsShow sendShopIdValue={sendShopIdValue} />
                </div>
            }
        </div>
    )
}

export default ToolsSection;