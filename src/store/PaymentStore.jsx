import { create } from "zustand";

const usePaymentStore = create((set) => ({
  showPaymentModal: false,
  openPaymentModal: () => set({ showPaymentModal: true }),
  closePaymentModal: () => set({ showPaymentModal: false }),
  togglePaymentModal: () =>
    set((state) => ({ showPaymentModal: !state.showPaymentModal })),
}));

export default usePaymentStore;
