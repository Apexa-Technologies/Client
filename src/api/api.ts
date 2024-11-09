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
            console.log("No response from server or no data");
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
            console.log("No response from server or no data");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getDays() {
    try {
        const response = await axios.get("getDays", {
            headers: {
                Authorization: localStorage.getItem("AUTH") || "",
            },
        });
        if (response.status === 200) {
            return response.data;
        } else if (response.status === 403) {
            console.log("Forbidden");
        } else {
            console.log("No response from server or no data");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function getUser() {
    try {
        const response = await axios.get("user", {
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

export async function getQuickNotes() {
    try {
        const response = await axios.get("quicknotes", {
            headers: {
                Authorization: localStorage.getItem("AUTH") || "",
            },
        });
        if (response.status === 200) {
            return response.data;
        } else if (response.status === 403) {
            console.log("Forbidden");
        } else {
            console.log("No response from the server");
        }
    } catch (error) {
        console.log(error);
    }
}

export async function postQuickNotes(newNote: any) {
    try {
        const response = await axios.post("quicknotes", newNote, {
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
