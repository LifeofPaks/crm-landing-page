import  create  from "zustand";

const usePaymentStore = create((set) => ({
  showPaymentModal: false,
  paymentSuccess: false,
  selectedPlan: null,
  openPaymentModal: (plan) =>
    set({ showPaymentModal: true, selectedPlan: plan }),
  closePaymentModal: () => set({ showPaymentModal: false, selectedPlan: null }),
  openPaymentSuccess: () => set({ paymentSuccess: true }),
  closePaymentSuccess: () => set({ paymentSuccess: false }),
}));

export default usePaymentStore;
