import { Outlet } from "react-router-dom";
import { Header } from "./header";

export function Layout() {
  return (
    <div className="py-4 px-2 flex flex-col items-center">
      <div className="w-[850px]">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
