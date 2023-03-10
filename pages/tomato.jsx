import Link from "next/link";

const Tomato = () => {
  return (
    <div>
      <h2>Link to 'main' Page</h2>
      <Link href="/">
        <p>Move to '/'</p>
      </Link>
    </div>
  );
};

export default Tomato;
