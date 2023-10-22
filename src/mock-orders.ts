import { Order } from "./components/board";

export const mockOrders: Order[] = [
  {
    id: "20231022-001",
    items: [
      {
        id: 1,
        itemName: "Борщ",
        price: 349,
        amount: 2,
        time: "2023-10-22 13:15:00",
      },
      {
        id: 2,
        itemName: "Пельмени",
        price: 199,
        amount: 1,
        time: "2023-10-22 13:15:00",
      },
      {
        id: 3,
        itemName: "Квас",
        price: 149,
        amount: 1,
        time: "2023-10-22 13:15:00",
      },
    ],
    comments: [{ id: 1, comment: "Много сметаны, пожалуйста" }],
    totalPrice: 896,
    time: "13:15",
    status: "pending",
    type: "delivery",
    paymentMethod: "card",
  },
  {
    id: "20231022-002",
    items: [
      {
        id: 4,
        itemName: "Пирожок с капустой",
        price: 199,
        amount: 1,
        time: "2023-10-22 14:00:00",
      },
      {
        id: 5,
        itemName: "Оливье",
        price: 349,
        amount: 1,
        time: "2023-10-22 14:00:00",
      },
      {
        id: 6,
        itemName: "Медовик",
        price: 399,
        amount: 1,
        time: "2023-10-22 14:00:00",
      },
    ],
    comments: [{ id: 2, comment: "Без майонеза, пожалуйста" }],
    totalPrice: 947,
    time: "14:00",
    status: "prep",
    type: "inPlace",
    paymentMethod: "card",
  },
  {
    id: "20231022-003",
    items: [
      {
        id: 7,
        itemName: "Шашлык из куриного мяса",
        price: 799,
        amount: 1,
        time: "2023-10-22 14:30:00",
      },
      {
        id: 8,
        itemName: "Лаваш",
        price: 299,
        amount: 1,
        time: "2023-10-22 14:30:00",
      },
      {
        id: 9,
        itemName: "Боржоми",
        price: 199,
        amount: 1,
        time: "2023-10-22 14:30:00",
      },
    ],
    comments: [{ id: 3, comment: "Очень остро" }],
    totalPrice: 1297,
    time: "14:30",
    status: "prep",
    type: "pickup",
    paymentMethod: "cash",
  },
  {
    id: "20231022-004",
    items: [
      {
        id: 10,
        itemName: "Сельдь под шубой",
        price: 449,
        amount: 1,
        time: "2023-10-22 15:00:00",
      },
      {
        id: 11,
        itemName: "Соленья",
        price: 249,
        amount: 1,
        time: "2023-10-22 15:00:00",
      },
      {
        id: 12,
        itemName: "Водка",
        price: 299,
        amount: 1,
        time: "2023-10-22 15:00:00",
      },
    ],
    comments: [{ id: 4, comment: "Пожалуйста, добавьте лимон" }],
    totalPrice: 997,
    time: "15:00",
    status: "prep",
    type: "delivery",
    paymentMethod: "card",
  },
  {
    id: "20231022-005",
    items: [
      {
        id: 13,
        itemName: "Пельмени",
        price: 199,
        amount: 2,
        time: "2023-10-22 15:30:00",
      },
      {
        id: 14,
        itemName: "Сибирская колбаса",
        price: 349,
        amount: 1,
        time: "2023-10-22 15:30:00",
      },
      {
        id: 15,
        itemName: "Биржа",
        price: 249,
        amount: 1,
        time: "2023-10-22 15:30:00",
      },
    ],
    comments: [{ id: 5, comment: "Больше чеснока" }],
    totalPrice: 996,
    time: "15:30",
    status: "pending",
    type: "pickup",
    paymentMethod: "cash",
  },
  {
    id: "20231022-006",
    items: [
      {
        id: 16,
        itemName: "Блины",
        price: 299,
        amount: 1,
        time: "2023-10-22 16:00:00",
      },
      {
        id: 17,
        itemName: "Икра",
        price: 699,
        amount: 1,
        time: "2023-10-22 16:00:00",
      },
      {
        id: 18,
        itemName: "Чай с малиной",
        price: 149,
        amount: 1,
        time: "2023-10-22 16:00:00",
      },
    ],
    comments: [{ id: 6, comment: "Добавьте сахара" }],
    totalPrice: 1147,
    time: "16:00",
    status: "prep",
    type: "inPlace",
    paymentMethod: "card",
  },
  {
    id: "20231022-007",
    items: [
      {
        id: 19,
        itemName: "Окрошка",
        price: 349,
        amount: 1,
        time: "2023-10-22 16:30:00",
      },
      {
        id: 20,
        itemName: "Сметана",
        price: 149,
        amount: 1,
        time: "2023-10-22 16:30:00",
      },
      {
        id: 21,
        itemName: "Квас",
        price: 199,
        amount: 1,
        time: "2023-10-22 16:30:00",
      },
    ],
    comments: [{ id: 7, comment: "Без огурцов, пожалуйста" }],
    totalPrice: 697,
    time: "16:30",
    status: "ready",
    type: "delivery",
    paymentMethod: "card",
  },
  {
    id: "20231022-008",
    items: [
      {
        id: 22,
        itemName: "Пельмени",
        price: 199,
        amount: 1,
        time: "2023-10-22 17:00:00",
      },
      {
        id: 23,
        itemName: "Борщ",
        price: 349,
        amount: 1,
        time: "2023-10-22 17:00:00",
      },
      {
        id: 24,
        itemName: "Чай с лимоном",
        price: 149,
        amount: 1,
        time: "2023-10-22 17:00:00",
      },
    ],
    comments: [{ id: 8, comment: "Больше лимона в чае" }],
    totalPrice: 697,
    time: "17:00",
    status: "delivering",
    type: "delivery",
    paymentMethod: "cash",
  },
  {
    id: "20231022-009",
    items: [
      {
        id: 25,
        itemName: "Блины",
        price: 299,
        amount: 2,
        time: "2023-10-22 17:30:00",
      },
      {
        id: 26,
        itemName: "Медовик",
        price: 399,
        amount: 1,
        time: "2023-10-22 17:30:00",
      },
      {
        id: 27,
        itemName: "Черничный кисель",
        price: 199,
        amount: 1,
        time: "2023-10-22 17:30:00",
      },
    ],
    comments: [{ id: 9, comment: "Больше меда на блинах" }],
    totalPrice: 996,
    time: "17:30",
    status: "pending",
    type: "inPlace",
    paymentMethod: "card",
  },
  {
    id: "20231022-010",
    items: [
      {
        id: 28,
        itemName: "Оливье",
        price: 349,
        amount: 1,
        time: "2023-10-22 18:00:00",
      },
      {
        id: 29,
        itemName: "Салат Цезарь",
        price: 299,
        amount: 1,
        time: "2023-10-22 18:00:00",
      },
      {
        id: 30,
        itemName: "Лимонад",
        price: 149,
        amount: 1,
        time: "2023-10-22 18:00:00",
      },
    ],
    comments: [{ id: 10, comment: "Без оливок, пожалуйста" }],
    totalPrice: 797,
    time: "18:00",
    status: "prep",
    type: "pickup",
    paymentMethod: "cash",
  },
  {
    id: "20231022-011",
    items: [
      {
        id: 31,
        itemName: "Голубцы",
        price: 399,
        amount: 2,
        time: "2023-10-22 18:30:00",
      },
      {
        id: 32,
        itemName: "Боржоми",
        price: 199,
        amount: 1,
        time: "2023-10-22 18:30:00",
      },
      {
        id: 33,
        itemName: "Медовуха",
        price: 299,
        amount: 1,
        time: "2023-10-22 18:30:00",
      },
    ],
    comments: [{ id: 11, comment: "Добавьте лимон в медовуху" }],
    totalPrice: 1097,
    time: "18:30",
    status: "delivering",
    type: "delivery",
    paymentMethod: "card",
  },
  {
    id: "20231022-012",
    items: [
      {
        id: 34,
        itemName: "Борщ",
        price: 349,
        amount: 2,
        time: "2023-10-22 19:00:00",
        notes: ["Без сметаны", "Без чеснока"],
      },
      {
        id: 35,
        itemName: "Пельмени",
        price: 199,
        amount: 1,
        time: "2023-10-22 19:00:00",
        notes: ["Без сметаны", "Без чеснока"],
      },
      {
        id: 36,
        itemName: "Компот",
        price: 199,
        amount: 1,
        time: "2023-10-22 19:00:00",
      },
    ],
    comments: [{ id: 12, comment: "Больше мяса в пельмени" }],
    totalPrice: 1096,
    time: "19:00",
    status: "pending",
    type: "inPlace",
    paymentMethod: "cash",
  },
  {
    id: "20231022-013",
    items: [
      {
        id: 37,
        itemName: "Блины",
        price: 299,
        amount: 1,
        time: "2023-10-22 19:30:00",
        notes: ["С шоколадом", "Без сахара"],
      },
      {
        id: 38,
        itemName: "Икра",
        price: 699,
        amount: 1,
        time: "2023-10-22 19:30:00",
      },
      {
        id: 39,
        itemName: "Чай с малиной",
        price: 149,
        amount: 1,
        time: "2023-10-22 19:30:00",
      },
    ],
    comments: [{ id: 13, comment: "Добавьте сахара" }],
    totalPrice: 1147,
    time: "19:30",
    status: "ready",
    type: "pickup",
    paymentMethod: "card",
  },
  {
    id: "20231022-014",
    items: [
      {
        id: 40,
        itemName: "Окрошка",
        price: 349,
        amount: 1,
        time: "2023-10-22 20:00:00",
      },
      {
        id: 41,
        itemName: "Сметана",
        price: 149,
        amount: 1,
        time: "2023-10-22 20:00:00",
      },
      {
        id: 42,
        itemName: "Квас",
        price: 199,
        amount: 1,
        time: "2023-10-22 20:00:00",
      },
    ],
    comments: [{ id: 14, comment: "Без огурцов, пожалуйста" }],
    totalPrice: 697,
    time: "20:00",
    status: "ready",
    type: "delivery",
    paymentMethod: "card",
  },
  {
    id: "20231022-015",
    items: [
      {
        id: 43,
        itemName: "Пельмени",
        price: 199,
        amount: 2,
        time: "2023-10-22 20:30:00",
      },
      {
        id: 44,
        itemName: "Сибирская колбаса",
        price: 349,
        amount: 1,
        time: "2023-10-22 20:30:00",
      },
      {
        id: 45,
        itemName: "Биржа",
        price: 249,
        amount: 1,
        time: "2023-10-22 20:30:00",
      },
    ],
    comments: [{ id: 15, comment: "Больше чеснока" }],
    totalPrice: 996,
    time: "20:30",
    status: "prep",
    type: "pickup",
    paymentMethod: "cash",
  },
];
