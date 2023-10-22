import OrderCard from "./order";
import { Order, OrderStatus } from "./board";
import { useFilterStore } from "@/store/filter";
import { useMemo } from "react";

type Props = {
  id: OrderStatus;
  orders: Order[];
  title: "Новый" | "Заготовка" | "Готов" | "Курьер в пути";
  headerClassName?: string;
};

export default function Container(props: Props) {
  const { orders, headerClassName } = props;
  const filter = useFilterStore((state) => state.filter);
  const filteredOrders = useMemo(
    () => orders.filter((order) => order.id.includes(filter)),
    [filter, orders]
  );

  return (
    <div className="bg-lightgray my-4 rounded-lg max-w-md w-full min-w-[280px]">
      <div
        className={`p-3 text-lg text-white font-semibold rounded-t-lg ${headerClassName}`}
      >
        <h3>
          {props.title} ({props.orders.length})
        </h3>
      </div>
      <div className="p-2">
        {filteredOrders.length === 0 && (
          <div className="text-slate text-center">Нет заказов</div>
        )}
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
