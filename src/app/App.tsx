import { default as Providers } from "./App.providers";
import { Search } from "@/features";
import { Layout } from "@/shared/ui";

const App = () => {
  return (
    <Providers>
      <Layout>
        <Search />
      </Layout>
    </Providers>
  );
};

export default App;
