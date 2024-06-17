import { useLoaderData } from "@remix-run/react";
import { AppProvider } from "@shopify/polaris";
import { buttonStyles, SuspenseComponent } from "~/routes/working";

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
      <AppProvider i18n={{}}>
        <SuspenseComponent data={data} />
      </AppProvider>
    </>
  );
}
