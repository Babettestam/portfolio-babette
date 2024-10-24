import Link from "next/link";

export default function Menu() {
  return (
    <div className="hidden gap-8 md:flex">
      <Link className="hover:underline" href="#main">
        Home
      </Link>
      <Link className="hover:underline" href="#about">
        About me
      </Link>
      <Link className="hover:underline" href="#work">
        Recent work
      </Link>
      <Link className="hover:underline btn" href="#contact">
        Contact
      </Link>
    </div>
  );
}
