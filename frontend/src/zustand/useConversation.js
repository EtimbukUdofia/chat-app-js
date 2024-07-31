import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (newSelectedConversation) => set({ selectedConversation: newSelectedConversation }),
  messages: [],
  setMessages: (newMessages) => set({ messages: newMessages }),
}));

export default useConversation;