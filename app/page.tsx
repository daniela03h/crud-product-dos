'use client'
import Image from "next/image";
import Link from "next/link";

import { Table } from "./_components/table";


export default function Home() {
  return (
    <main>
      <Link href="/form"> formulario</Link>
      <h1>Index</h1>
      <Table/>
    </main>
  );
}
