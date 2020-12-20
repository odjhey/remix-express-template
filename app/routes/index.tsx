import { useRouteData } from "@remix-run/react";

export function meta() {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
}

import Comp1, { CompProps } from "../components/Comp1";

export default function Index() {
  let data = useRouteData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to Remix!</h2>
      <Comp1 label={"la"} backgroundColor={"green"}></Comp1>
      <p>
        <a href="https://remix.run/dashboard/docs">Check out the docs</a> to get
        started.
      </p>
      <p>Message from the loader: {data.message}</p>
    </div>
  );
}
