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
          Undergraduate in Electrical and Computer Engineering at UC Berkeley.
        </p>

        <p className="interests">
          Interested in cryptography, quantum computing, space exploration,
          communication technology, infrastructure, robotics, and RF.
        </p>

        <p className="links">
          <a href="mailto:kvasilev@berkeley.edu">Contact</a>
          {" · "}
          <Link href="/blogs">Blog</Link>
        </p>
      </div>
      <div id="right"></div>
    </div>
  );
}
