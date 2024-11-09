export interface user {
    firstName: string;
    lastName: string;
    equity: number;
}

export interface data {
    day: number;
    month: number;
    date: string;
    equity: number;
    totalProfit: number;
    journaldata: {
        title: String;
        journal: String;
    };
    trades: [trade];
}

export interface notes {
    notes: [note] | undefined;
}
export interface note {
    date: string;
    subject: string;
    note: string;
    _id: string;
}

export interface trades {
    trades: [trade] | undefined;
}
export interface trade {
    entry: number;
    stop: number;
    take: number;
    riskReward: number;
    profit: number;
    time: string;
    pair: string;
    notes: string;
    _id: string;
}
