import { API, setAuthToken } from "../config/api";

export default async (URL, action, data, token, config) => {
  try {
    switch (action) {
      case 1:
        let { data: GetData } = await API.get(
          URL,
          data ? data : null,
          config ? config : null,
          token ? setAuthToken(token) : null
        );
        return GetData;
      case 2:
        let { data: PostData } = await API.post(
          URL,
          data ? data : null,
          config ? config : null,
          token ? setAuthToken(token) : null
        );
        return PostData;
      case 3:
        let { data: PatchData } = await API.patch(
          URL,
          data ? data : null,
          config ? config : null,
          token ? setAuthToken(token) : null
        );
        return PatchData;
      case 4:
        let { data: DeleteData } = await API.delete(
          URL,
          data ? data : null,
          config ? config : null,
          token ? setAuthToken(token) : null
        );
        return DeleteData;
      default:
        return null;
    }
  } catch (error) {
    if (error.response) {
      const {
        data: { status },
      } = error.response;
      if (status > 399) return error.response.data;
    }
  }
};
