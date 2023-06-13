import { reactive } from "vue";
import instance from "../interceptor/httpInterceptor.ts";

const chatVO = reactive<Chat.ChatVO>({
  web_chat_id: "",
  message: "",
  session: "",
  create_time: new Date(),
});

export async function webChat(params: Chat.webChatRequest) {
  await instance.post("/api/chat/ask", params).then((successResponse) => {
    if (successResponse.data.code === 200) {
      const chat = successResponse.data.data;
      chatVO.web_chat_id = chat.web_chat_id;
      chatVO.message = chat.message;
      chatVO.session = chat.session;
      chatVO.create_time = chat.create_time;
    }
  });
  return chatVO;
}
