import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/table.module.css'
import {KommuneCombobox} from "../components/kommune-combobox";
import {KommuneName} from "../types";
import {useState} from "react";
import {KommuneOverview} from "../components/kommune-overview";

const Home: NextPage = () => {
  const [kommune, setKommune] = useState<KommuneName | undefined>(undefined);

  let content;
  if (kommune === undefined){
    content = <div>
      Vælg en kommune fra listen
    </div>
  } else {
    content = <KommuneOverview name={kommune}>

    </KommuneOverview>
  }


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <KommuneCombobox value={kommune} onChange={setKommune} instanceId={"sdfsfsd"}/>
        {content}
      </main>

    </div>
  )
}

export default Home
