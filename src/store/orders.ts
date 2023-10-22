import { Order } from "@/components/board";
import { create } from "zustand";

type InitialState = {
  orders: {
    pendingOrders: Order[];
    prepOrders: Order[];
    readyOrders: Order[];
    deliveringOrders: Order[];
  };
};

type Action = {
  setPendingOrders: (orders: Order[]) => void;
  setPrepOrders: (orders: Order[]) => void;
  setReadyOrders: (orders: Order[]) => void;
  setDeliveringOrders: (orders: Order[]) => void;
  handleAccept: (orderId: string) => void;
  handleCancel: (orderId: string) => void;
  handleReady: (orderId: string) => void;
  handleFinish: (orderId: string) => void;
};

export const useOrdersStore = create<InitialState & Action>((set) => ({
  orders: {
    pendingOrders: [],
    prepOrders: [],
    deliveringOrders: [],
    readyOrders: [],
  },
  setPendingOrders: (orders: Order[]) => {
    set((state) => ({
      orders: {
        ...state.orders,
        pendingOrders: orders,
      },
    }));
  },
  setPrepOrders: (orders: Order[]) => {
    set((state) => ({
      orders: {
        ...state.orders,
        prepOrders: orders,
      },
    }));
  },
  setReadyOrders: (orders: Order[]) => {
    set((state) => ({
      orders: {
        ...state.orders,
        readyOrders: orders,
      },
    }));
  },
  setDeliveringOrders: (orders: Order[]) => {
    set((state) => ({
      orders: {
        ...state.orders,
        deliveringOrders: orders,
      },
    }));
  },
  handleAccept: (orderId: string) => {
    set((state) => {
      const filteredOrder = state.orders.pendingOrders.filter(
        (order) => order.id === orderId
      );
      if (filteredOrder[0]) {
        filteredOrder[0].status = "prep";
      }
      return {
        orders: {
          ...state.orders,
          pendingOrders: state.orders.pendingOrders.filter(
            (order) => order.id !== orderId
          ),
          prepOrders: [...state.orders.prepOrders, ...filteredOrder],
        },
      };
    });
  },
  handleCancel: (orderId: string) => {
    set((state) => ({
      orders: {
        ...state.orders,
        pendingOrders: state.orders.pendingOrders.filter(
          (order) => order.id !== orderId
        ),
      },
    }));
  },

  handleReady: (orderId: string) => {
    set((state) => {
      const filteredOrder = state.orders.prepOrders.find(
        (order) => order.id === orderId
      );
      if (filteredOrder) {
        filteredOrder.status = "ready";
      }
      return {
        orders: {
          ...state.orders,
          prepOrders: state.orders.prepOrders.filter(
            (order) => order.id !== orderId
          ),
          readyOrders: filteredOrder
            ? [...state.orders.readyOrders, filteredOrder]
            : state.orders.readyOrders,
        },
      };
    });
  },
  handleFinish: (orderId: string) => {
    set((state) => {
      const filteredOrder = state.orders.readyOrders.find(
        (order) => order.id === orderId
      );
      if (filteredOrder && filteredOrder.type === "delivery") {
        filteredOrder.status = "delivering";
        return {
          orders: {
            ...state.orders,
            readyOrders: state.orders.readyOrders.filter(
              (order) => order.id !== orderId
            ),
            deliveringOrders: [...state.orders.deliveringOrders, filteredOrder],
          },
        };
      }
      return {
        orders: {
          ...state.orders,
          readyOrders: state.orders.readyOrders.filter(
            (order) => order.id !== orderId
          ),
        },
      };
    });
  },
}));
