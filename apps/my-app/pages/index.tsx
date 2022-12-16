import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { sayHello } from "@my-app/lib";

export default function Home() {
  return (
    <div>
      <h1>{sayHello()}</h1>
    </div>
  );
}
