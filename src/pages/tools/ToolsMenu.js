import { useEffect, useState } from "react";

function ToolsView({ transferIsAddTool }) {
    const [isAddTool, setIsAddTool] = useState(false);

    const handleAddTools = () => {
        setIsAddTool(prev => !prev);
    }

    useEffect(() => {
        transferIsAddTool(isAddTool);
    }, [isAddTool, transferIsAddTool])

    return (
        <div>
            {
                !isAddTool ? <button type="button" onClick={handleAddTools} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">Add Tools</button> : <button type="button" onClick={handleAddTools} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">Back to list</button>
            }
        </div>
    )
}

export default ToolsView;