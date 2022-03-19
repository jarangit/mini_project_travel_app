import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        // location_id: "293919",
        // restaurant_tagcategory: "10591",
        // restaurant_tagcategory_standalone: "10591",
        // currency: "USD",
        // lunit: "km",
        // limit: "30",
        // open_now: "false",
        // lang: "en_US",
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "c33356a999msh66c3bec0da47714p142a91jsn24c1b3083614",
      },
    });
    return data;
  } catch (error) {
    throw console.log(error);
  }
};
