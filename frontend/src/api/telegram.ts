import axios from "axios";

export function BACK_FORM_POST(message: string) {
    const token = "6919275116:AAGXuMO9DSm17HKXOXrhmThqhRhdLKcO-iI";
    const chat_id = "-4025228245";

    axios.post(`https://api.telegram.org/bot${ token }/sendMessage`, {
        chat_id: chat_id,
        parse_mode: 'html',
        text: message
    })
}