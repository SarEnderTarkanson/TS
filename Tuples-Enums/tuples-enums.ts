// const stuff2 : (string | number)[] = ["abc", "def", "ghi", 1, 2]

// const color: number[] = [12, 34, 56, 78];

const color: [number, number, number] = [1, 2, 3];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"];

goodRes[0] = 100;

const responses: HTTPResponse[] = [
  [404, "NotFound"],
  [401, "UnAuthorized"],
];

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED = 23,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.PENDING)
