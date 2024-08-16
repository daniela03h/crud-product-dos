'use client'

import Link from "next/link";
import { Table } from "./_components/product-table/table";
import HeaderComponent from "./_components/UI/Header/header";

export default function Home() {
  return (
    <>
      <HeaderComponent><Link href="/add-products"> Create Product</Link></HeaderComponent>
      <main>
        <Table />
      </main>
    </>
  );
}
