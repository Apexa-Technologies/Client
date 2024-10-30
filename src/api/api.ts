import axios from "axios";

export async function getTrades() {
    try {
        const response = await axios.get("recentTrades", {
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

export async function getLast5Days() {
    try {
        const response = await axios.get("last5Days", {
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
