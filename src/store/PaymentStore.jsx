import  create  from "zustand";

const usePaymentStore = create((set) => ({
  showPaymentModal: false,
  selectedPlan: null,
  openPaymentModal: (plan) =>
    set({ showPaymentModal: true, selectedPlan: plan }),
  closePaymentModal: () => set({ showPaymentModal: false, selectedPlan: null }),
}));

export default usePaymentStore;
