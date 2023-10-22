import { Item } from "@/components/order";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { divideOrders } from "@/lib/utils";
import { mockOrders } from "@/mock-orders";
import Container from "./container";
import { useOrdersStore } from "@/store/orders";
import { useEffect } from "react";
import { useFilterStore } from "@/store/filter";
import { ClockIcon } from "@/components/icons/clock-icon";
import { ClipboardIcon } from "@/components/icons/clipboard-icon";
import { SearchIcon } from "@/components/icons/search-icon";

export type OrderStatus = "pending" | "prep" | "ready" | "delivering";

export type Item = {
  id: number;
  itemName: string;
  price: number;
  amount: number;
  time: string;
  notes?: string[];
};

export type Comment = {
  id: number;
  comment: string;
};

export type Order = {
  id: string;
  totalPrice: number;
  items: Item[];
  comments: Comment[];
  time: string;
  status: OrderStatus;
  type: "delivery" | "pickup" | "inPlace";
  paymentMethod: "cash" | "card";
};

const Filter = () => {
  const { setFilter, filter } = useFilterStore();
  return (
    <div className="flex justify-between gap-3">
      <Input
        className="text-sm text-muted-foreground max-w-[240px]"
        icon={<SearchIcon />}
        value={filter}
        placeholder="Поиск по ID"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="flex gap-3">
        <Select>
          <SelectTrigger className="w-[140px]">
            <SelectValue
              placeholder={
                <div className="flex gap-2 font-semibold">
                  <ClipboardIcon /> <span>Выбрать</span>
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="115">Всего: 115</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex justify-between items-center gap-2 py-1 px-3 border rounded-md">
          <span className="text-slate">
            <ClockIcon />
          </span>
          <span className="font-semibold">45:08</span>
        </div>
      </div>
    </div>
  );
};

export default function Board() {
  const orders = useOrdersStore((state) => state.orders);
  const setPendingOrders = useOrdersStore((state) => state.setPendingOrders);
  const setPrepOrders = useOrdersStore((state) => state.setPrepOrders);
  const setReadyOrders = useOrdersStore((state) => state.setReadyOrders);
  const setDeliveringOrders = useOrdersStore(
    (state) => state.setDeliveringOrders
  );

  useEffect(() => {
    const { deliveringOrders, pendingOrders, prepOrders, readyOrders } =
      divideOrders(mockOrders);
    setPendingOrders(pendingOrders);
    setPrepOrders(prepOrders);
    setReadyOrders(readyOrders);
    setDeliveringOrders(deliveringOrders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Filter />
      <div className="flex gap-2 items-start">
        <Container
          id="pending"
          orders={orders.pendingOrders}
          title="Новый"
          headerClassName="bg-blue"
        />
        <Container
          id="prep"
          orders={orders.prepOrders}
          title="Заготовка"
          headerClassName="bg-yellow"
        />
        <Container
          id="ready"
          orders={orders.readyOrders}
          title="Готов"
          headerClassName="bg-green"
        />
        <Container
          id="delivering"
          orders={orders.deliveringOrders}
          title="Курьер в пути"
          headerClassName="bg-teal"
        />
      </div>
    </>
  );
}
