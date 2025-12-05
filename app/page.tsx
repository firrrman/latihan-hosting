"use client";

import Layout from "./component/layout";
import ScrollVelocity from "./component/scroll-velocity";

export default function Home() {
  const velocity = 30;
  return (
    <Layout>
      <div className="bg-[#eeefe9] h-lvh pt-30">
        <ScrollVelocity
          texts={["Selamat Berbelanja", "Perabotan Berkualitas"]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </div>
    </Layout>
  );
}
