import { Children } from "react";


const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({ 
    children,
    onClose,}) => {
   
return <div className="fixed inset-0 bg-black bg-opacity-50 flex item-center justify-center">
    <div className="bg-white p-4 rounded shadow-lg">
        {children}

        <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 ">

        </button>
</div>
</div>  
}

export default Modal