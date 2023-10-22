import { Order } from "@/components/board";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const defaultInitializer = (index: number) => index;

export function createRange<T = number>(
  length: number,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initializer: (index: number) => any = defaultInitializer
): T[] {
  return [...new Array(length)].map((_, index) => initializer(index));
}

export function divideOrders(orders: Order[]) {
  const pendingOrders = orders.filter((order) => order.status === "pending");
  const prepOrders = orders.filter((order) => order.status === "prep");
  const readyOrders = orders.filter((order) => order.status === "ready");
  const deliveringOrders = orders.filter(
    (order) => order.status === "delivering"
  );
  return {
    pendingOrders,
    prepOrders,
    deliveringOrders,
    readyOrders,
  };
}
