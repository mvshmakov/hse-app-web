const API_BASE_RUZ = "https://api.hseapp.ru/gateway/ruz/lessons/";

export const fetchSchedule = async (student: string) => {
    // const t = {
    //     start: '2019-01-30',
    //     offset: 14,
    //     [student | lecturer |...]: id,
    // }

    const response = await fetch(API_BASE_RUZ, {
        method: "GET",
        body: JSON.stringify({
            start: "2019-01-30",
            offset: 14,
            student,
        }),
        headers: {
            "content-type": "application/json"
        }
    });

    if (!response.ok) {
        throw Error(response.statusText);
    }

    return response;
};
