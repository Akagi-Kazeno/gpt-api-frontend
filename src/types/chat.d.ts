declare namespace Chat {
  interface ChatVO {
    web_chat_id?: string;
    message?: string;
    session?: string;
    create_time?: Date;
  }

  interface webChatRequest {
    prompt?: string;
  }
}
