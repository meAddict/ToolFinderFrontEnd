function ToolView({ sendEachTool }) {

    const handleDeleteTool = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8080/mytools/deletetool", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                toolId: sendEachTool.toolId
            })
        }).then(async (response) => {
            if(response.ok) {
                
            }
        })
    }

    return <div key={sendEachTool.id}>
            <h1>Tool Name: {sendEachTool.toolName}</h1>
            <h1>Tool Category: {sendEachTool.toolCategory}</h1>
            <h1>Tool Description: {sendEachTool.toolDescription}</h1>
            <h1>Tool Price: {sendEachTool.toolPrice}</h1>
            <button type="submit" onClick={handleDeleteTool} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">Delete Tool</button>
        </div>
}

export default ToolView;