import { SSRProvider } from "providers/SSRProvider"
import { Main } from "components/Main"

function App() {
  return (
      <SSRProvider>
          <Main />
      </SSRProvider>
  );
}

export default App;
