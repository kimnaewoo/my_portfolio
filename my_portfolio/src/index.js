import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
// 컴포넌트 출력 //////////
// 먼저 root객체만들고
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render메서드로 출력
root.render(<App />);
