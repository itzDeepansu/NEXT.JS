"use client";
import Image from "next/image";

export default function Home() {
  const handledata = async() => {
    let dat = {
      name: "deep",
      class: "7",
    };
    let a = await fetch("api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dat),
    });
    let b =await a.json()
    console.log(b);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <button onClick={handledata}>btn</button>
    </main>
  );
}
