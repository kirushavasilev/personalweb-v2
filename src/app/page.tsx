import Link from "next/link";

export default function Home() {
  return (
    <div id="holder">
      <div id="left"></div>
      <div id="middle">
        <h1>
          Kirill <span className="pronunciation">[kee-REEL]</span> Vasilev
        </h1>

        <p>
          I am an undergraduate engineering student at UC Berkeley.
        </p>

        <p>
          I am deeply interested in robotics, computing, communication technologies,
          and space exploration. Currently involved in Formula Racing Team and
          closed loop robotics automation.
        </p>

        <p>
          I am committed to contributing to humanity&apos;s future innovation in technology.
          On a road of becoming a polymath.
        </p>

        <p>
          <Link href="/blogs">Blog</Link>
        </p>
      </div>
      <div id="right"></div>
    </div>
  );
}
