import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import { Text } from "@shopify/polaris";

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
      <Text as={"p"}>Rendering without app provider</Text>
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
