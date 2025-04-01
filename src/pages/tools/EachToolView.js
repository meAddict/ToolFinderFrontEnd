import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBook, faMoneyBill, faScrewdriverWrench, faSignature, faTrash } from "@fortawesome/free-solid-svg-icons";

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

    return (
        <div key={sendEachTool.id} className="grid grid-cols-4 gap-4 bg-red-500 rounded-xl">
            <h1 className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faSignature }/> Name: {sendEachTool.toolName}</h1>
            <h1 className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faScrewdriverWrench }/> Category: {sendEachTool.toolCategory}</h1>
            <h1 className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faBook }/> Description: {sendEachTool.toolDescription}</h1>
            <h1 className="text-sm/6 font-medium text-white"><FontAwesomeIcon icon={ faMoneyBill }/> Price: {sendEachTool.toolPrice}</h1>
            <button type="submit" onClick={handleDeleteTool} className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"><FontAwesomeIcon icon={ faTrash }/> Delete Tool</button>
        </div>
    );
}

export default ToolView;