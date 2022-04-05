import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const successMessage = message => {
    toast.success(message, {
        position: "top-right",
        closeOnClick: true
    });
};

export const errorMessage = message => {
    toast.error(message, {
        position: "top-right",
        closeOnClick: true
    });
};
