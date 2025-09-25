import  create  from "zustand";

const usePaymentStore = create((set) => ({
  showPaymentModal: false,
  paymentSuccess: false,
  selectedPlan: null,
  stripeUrl: null,
  openPaymentModal: (plan) =>
    set({ showPaymentModal: true, selectedPlan: plan }),
  closePaymentModal: () => set({ showPaymentModal: false, selectedPlan: null }),
  openPaymentSuccess: () => set({ paymentSuccess: true }),
  closePaymentSuccess: () => set({ paymentSuccess: false }),
  setStripeUrl: (url) => set({ stripeUrl: url }),
  clearStripeUrl: () => set({ stripeUrl: null }), 
}));

export default usePaymentStore;
