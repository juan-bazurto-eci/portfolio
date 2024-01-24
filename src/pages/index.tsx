import { Aside } from "@/containers/organism/Aside";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio - Juan Camilo Bazurto Arias</title>
      </Head>
      <div className="layout">
        <Aside />

        <main className="layout__content">
          <section className="content__page">
            <h1 className="page__name">Juan Camilo Bazurto Arias</h1>
            <h1 className="page__name page__name--alt">Juan Bazurto</h1>
            <h2 className="page__job">Ingeniero de Sistemas</h2>
          </section>
        </main>
      </div>
    </>
  );
}
