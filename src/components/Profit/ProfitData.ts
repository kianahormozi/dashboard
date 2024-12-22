export interface BoxData {
    title: string;
    price: string;
    change: string;
    prev: string;
    color: string;
    graphColor: string;
    datasets: number[];
  }
  export const boxData: BoxData[] = [
    {
      title: "Chart One",
      price: "2,345$",
      change: "+25%",
      prev: "20,641 (prev)",
      color: "green",
      graphColor: "#4caf50",
      datasets: [100, 200, 150, 250, 100, 300, 450],
    },
    {
      title: "Chart Two",
      price: "2,345$",
      change: "+14%",
      prev: "20,641 (prev)",
      color: "green",
      graphColor: "#f50057",
      datasets: [200, 300, 400, 350, 450, 500, 600],
    }
  ];