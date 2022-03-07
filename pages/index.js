import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Home() {
  
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state);
  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>WhatsApp</title>
        <meta name="description" content="It's an education App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        {" "}
        <button
          onClick={() => {
            dispatch({ type: "INC", payload: 5 });
          }}
        >
          Arttır
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DEC", payload: 3 });
          }}
        >
          Azalt
        </button>
        <h1>{data.sayı}</h1>
      </main>
    </div>
  );
}
