import { Layout } from "@/components/layout";
import Board from "@/components/board";

function App() {
  const title = "Cегодняшние заказы";

  return (
    <Layout title={title}>
      <Board />
    </Layout>
  );
}

export default App;
