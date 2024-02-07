export const fetchMessage = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://127.0.0.1:3000/api/v1/greetings");
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const data = await response.json();
      dispatch(MessageAction(data.message.message));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
};

export const MessageAction = (message) => {
  return {
    type: "message/fetchMessage",
    payload: message,
  };
};
