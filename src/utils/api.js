import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "Hidden_By_Myself",
    cx: "Hidden_By_Myself",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};


/*key: "AIzaSyCRnbN1EkKYNR4m6pi0Qilsqvcfc7p6xik", cx: "93b9e0bf719ba4f63",*/