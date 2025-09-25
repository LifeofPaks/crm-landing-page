import  create  from "zustand";

const usePaymentStore = create((set) => ({
  showPaymentModal: false,
  paymentSuccess: false,
  selectedPlan: null,
  redirectUrl: null,
  openPaymentModal: (plan) =>
    set({ showPaymentModal: true, selectedPlan: plan }),
  closePaymentModal: () => set({ showPaymentModal: false, selectedPlan: null }),
  openPaymentSuccess: () => set({ paymentSuccess: true }),
  closePaymentSuccess: () => set({ paymentSuccess: false }),
  setRedirectUrl: (url) => set({ redirectUrl: url }),
  clearRedirectUrl: () => set({ redirectUrl: null }),
}));

export default usePaymentStore;
