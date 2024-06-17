import { Await, useLoaderData } from "@remix-run/react";
import { CSSProperties, Suspense } from "react";

export function loader() {
  const data = new Promise((r) => setTimeout(r, 2000)).then(
    () => "Hello World"
  );
  return { data };
}

export default function Index() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <>
      <a href={"/working"} style={buttonStyles}>
        To Working
      </a>
      <a href={"/broken"} style={buttonStyles}>
        To Broken
      </a>
      <br />
      <SuspenseComponent data={data} />
    </>
  );
}

export function SuspenseComponent(props: { data: Promise<string> }) {
  return (
    <Suspense fallback={"loading"}>
      <Await resolve={props.data}>{(data) => data}</Await>
    </Suspense>
  );
}

export const buttonStyles = {
  padding: "1px 6px",
  margin: "12px",
  color: "buttontext",
  backgroundColor: "buttonface",
  textDecoration: "none",
  borderRadius: "3px",
} as CSSProperties;
