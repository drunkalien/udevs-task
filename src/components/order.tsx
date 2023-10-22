import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Item as ItemType, OrderStatus, Order as OrderType } from "./board";
import { Button } from "./ui/button";
import { useOrdersStore } from "@/store/orders";
import { InfoIcon } from "./icons/info-icon";
import { CancelIcon } from "./icons/cancel-icon";
import { AcceptIcon } from "./icons/accept-icon";
import { ClockIcon } from "./icons/clock-icon";
import { StoreIcon } from "./icons/store-icon";
import { CardIcon } from "./icons/card-icon";
import { CashIcon } from "./icons/cash-icon";
import { PickUpIcon } from "./icons/pick-up";
import { DeliveryIcon } from "./icons/delivery-icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type CardAcrtionsProps = {
  orderStatus: OrderStatus;
  orderId: string;
};

const CardActions = ({ orderStatus, orderId }: CardAcrtionsProps) => {
  const handleCancel = useOrdersStore((state) => state.handleCancel);
  const handleAccept = useOrdersStore((state) => state.handleAccept);
  const handleReady = useOrdersStore((state) => state.handleReady);
  const handleFinish = useOrdersStore((state) => state.handleFinish);

  if (orderStatus === "pending") {
    return (
      <div className="flex gap-[6px] w-full">
        <Button
          className="w-full flex gap-1 items-center"
          variant="danger"
          onClick={() => handleCancel(orderId)}
        >
          <CancelIcon />
          Отменить
        </Button>
        <Button
          className="bg-blue w-full flex gap-1 items-center"
          onClick={() => handleAccept(orderId)}
        >
          <AcceptIcon />
          Принять
        </Button>
      </div>
    );
  }
  if (orderStatus === "prep") {
    return (
      <>
        <Button
          className="w-full flex gap-1 items-center text-blue border-blue fill-blue"
          variant="outline"
          onClick={() => handleReady(orderId)}
        >
          <AcceptIcon />
          Готово
        </Button>
      </>
    );
  }
  if (orderStatus === "ready") {
    return (
      <>
        <Button
          className="w-full text-blue border-blue fill-blue"
          variant="outline"
          onClick={() => handleFinish(orderId)}
        >
          Завершить
        </Button>
      </>
    );
  }
  return null;
};

export function Item(props: { item: ItemType }) {
  return (
    <div className="flex gap-2">
      <div>{props.item.amount} x</div>
      <div>
        <p className="font-semibold bg-white">{props.item.itemName}</p>
        {props.item.notes?.map((note, index) => (
          <p className="text-xs text-slate" key={index}>
            {note}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function OrderCard({ order }: { order: OrderType }) {
  return (
    <Card>
      <CardHeader className="justify-between items-center flex-wrap">
        <CardTitle>
          <span className="flex items-center gap-1">
            <span className="text-lg">ID: {order.id}</span> <InfoIcon />
          </span>
        </CardTitle>
        <CardDescription className="flex items-center gap-1 !mt-0">
          <span>{order.totalPrice} сум</span>
          <span className="flex items-end">
            {order.paymentMethod === "card" && <CardIcon />}
            {order.paymentMethod === "cash" && <CashIcon />}
          </span>
          <span>
            {order.type === "inPlace" && <StoreIcon />}
            {order.type === "pickup" && <PickUpIcon />}
            {order.type === "delivery" && <DeliveryIcon />}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          {order.items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
        <div className="flex justify-end items-center gap-1 text-sm text-slate">
          <ClockIcon />
          {order.time}
        </div>
      </CardContent>
      {order.status !== "delivering" && (
        <CardFooter className="flex-col items-stretch">
          {order.status === "prep" && order.comments.length > 0 && (
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-slate font-normal pt-0">
                  Комментарии ({order.comments.length})
                </AccordionTrigger>
                <AccordionContent>
                  {order.comments.map(({ comment, id }) => (
                    <div key={id} className="flex gap-1 items-center">
                      <span className="text-xs text-slate">{comment}</span>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          <CardActions orderId={order.id} orderStatus={order.status} />
        </CardFooter>
      )}
    </Card>
  );
}
