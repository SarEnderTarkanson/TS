const ages: number[] = [];

const gameBoard: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];

type Product = {
  name: string;
  price: number;
};

function getTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
}
