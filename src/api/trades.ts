import axios from "axios";
import toast from "react-hot-toast";

export async function getTrades() {
    try {
        const response = await axios.get("trades", {
            headers: {
                Authorization: localStorage.getItem("AUTH") || "",
            },
        });
        if (response.status === 200) {
            return response.data;
        } else if (response.status === 403) {
            console.log("Forbidden");
        } else {
            console.log("No Response from server or No Data");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function postTrades(newTrade: any) {
    try {
        const response = await axios.post("newtrade", newTrade, {
            headers: {
                Authorization: localStorage.getItem("AUTH"),
            },
        });
        if (response.status === 200) {
            return response.data;
        } else if (response.status === 403) {
            console.log("Forbidden");
        } else {
            console.log("No Response from server or No Data");
        }
    } catch (error) {
        console.log(error);
    }
}
