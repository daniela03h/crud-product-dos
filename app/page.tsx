'use client'

import Link from "next/link";
import HeaderComponent from "./_components/UI/Header/header";
import { Table } from "./_components/product-table/table";

export default function Home() {
  return (
    <>
      <HeaderComponent><Link href="/add-products"> Create Product</Link></HeaderComponent>
      <main>
        <Table/>
      </main>
    </>
  );
}
