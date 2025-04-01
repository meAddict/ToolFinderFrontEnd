import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faScrewdriverWrench, faSignature, faTrash, faBook, faMoneyBill, faImage } from "@fortawesome/free-solid-svg-icons";

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

    console.log(btoa(JSON.stringify(sendEachTool.toolImage)));

    return (
        <div key={sendEachTool.id} className="bg-red-500 p-4 rounded-md ms-2">
            <img src={sendEachTool.toolImage} alt="toolImage" className="align-center mb-4 w-30 h-20 rounded-md" />
            <div className="grid grid-cols-2">
                <h1 className="text-sm font-medium text-white mb-2"><FontAwesomeIcon icon={ faSignature }/> Name: </h1>
                <h1 className="text-sm font-medium text-white mb-2">{sendEachTool.toolName}</h1>
            </div>
            <div className="grid grid-cols-2">
                <h1 className="text-sm font-medium text-white mb-2"><FontAwesomeIcon icon={ faScrewdriverWrench }/> Category: </h1>
                <h1 className="text-sm font-medium text-white mb-2">{sendEachTool.toolCategory}</h1>
            </div>
            <div className="grid grid-cols-2">
                <h1 className="text-sm font-medium text-white mb-2"><FontAwesomeIcon icon={ faBook }/> Description: </h1>
                <h1 className="text-sm font-medium text-white mb-2">{sendEachTool.toolDescription}</h1>
            </div>
            <div className="grid grid-cols-2">
                <h1 className="text-sm font-medium text-white mb-2"><FontAwesomeIcon icon={ faMoneyBill }/> Price: </h1>
                <h1 className="text-sm font-medium text-white mb-2">{sendEachTool.toolPrice} ₹</h1>
            </div>
            <button type="submit" onClick={handleDeleteTool} className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-sm ring-gray-300 hover:bg-gray-50">
                <FontAwesomeIcon icon={ faTrash }/> Delete Tool
            </button>
        </div>
    );
}

export default ToolView;