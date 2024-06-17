import { useLoaderData } from "@remix-run/react";
import { AppProvider, Text } from "@shopify/polaris";
import { SuspenseComponent } from "~/routes/working";

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
      <AppProvider i18n={{}}>
        <SuspenseComponent data={data} />
      </AppProvider>
    </>
  );
}
