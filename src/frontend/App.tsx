import "./App.css";

import { useHello } from "./hooks/useHello";

function App() {
    const { isLoading, error, hello } = useHello();

    return (
        <>
            <div></div>
            <h1>Vite + React + Hono</h1>
            {isLoading ? "Loading..." : error ? `Error: ${error.message}` : hello?.message}
        </>
    );
}

export default App;
