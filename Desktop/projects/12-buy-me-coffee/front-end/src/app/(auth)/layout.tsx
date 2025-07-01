import Image from "next/image";
import { AuthLeftHalf } from "./_components/AuthLeftHalf";
import SignUp from "./signup/page";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex">
      <AuthLeftHalf />

      <div className="w-1/2 h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
