import Link from "next/link";
import Menu from "@/components/Menu";
import Image from "next/image";
import Logo from "/public/logo.png";

export default function Header() {
  return (
    <>
      <div className="relative z-10 w-full text-center">
        <div
          className={`fixed z-10 w-full transition-colors duration-500 top-0 fly-in-top bg-white`}
        >
          <div className="grid responsive-grid py-5">
            <div className="col-start-2 flex justify-between">
              <div className="flex gap-3 items-center">
                <Image src={Logo} alt="Babette Stam Logo" width={14} />
                <h3 className=" text-left text-2xl font-bold">
                  <Link href="/">babette</Link>
                </h3>
              </div>
              <Menu />
            </div>

            {/* <div className="absolute right-4 md:right-0">
              <Link href="/auth/login" className="btn-yellow-300">
                Login
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
