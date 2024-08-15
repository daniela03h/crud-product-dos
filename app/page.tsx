'use client'

import Link from "next/link";
import { Table } from "./_components/Table/table";
import HeaderComponent from "./components/header";



export default function Home() {
  return (
    <>
      <HeaderComponent><Link href="/form"> Create Product</Link></HeaderComponent>
      <main>
        <Table />
      </main>
    </>
  );
}
