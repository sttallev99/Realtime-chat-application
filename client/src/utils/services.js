export const baseURL = 'http://localhost:5000/api';

export const postRequest = async (url, bodyData) => {
    console.log(url);
    console.log(bodyData)
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyData)
    });

    const data = await res.json();

    if(!res.ok) {
        let message

        if(data?.message) {
            message = data.message;
        }else{
            message = data;
        }

        return {error: true, message};
    }
    return data;
}