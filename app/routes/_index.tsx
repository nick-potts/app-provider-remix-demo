import { buttonStyles } from "~/routes/working";

export default function Index() {
  return (
    <>
      <a href={"/working"} style={buttonStyles}>
        To Working
      </a>
      <a href={"/broken"} style={buttonStyles}>
        To Broken
      </a>
    </>
  );
}
