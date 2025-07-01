import Image from "next/image";

export const AuthLeftHalf = () => {
  return (
    <div className="w-1/2 h-screen bg-amber-400 flex items-center justify-center flex-col gap-[32px] relative">
      <Image
        src="/Logo.png"
        alt=""
        width={147}
        height={20}
        className="absolute top-[32px] left-[80px] "
      />
      <div className="">
        <Image src="/coffee.png" alt="" height={240} width={240} />
      </div>
      <div>
        <h1 className="font-[700] text-[24px] flex justify-center">
          Fund your creative work
        </h1>
        <p className="font-[400] text-[16px] flex text-center w-[450px]">
          Accept support. Start a membership. Setup a shop. It's easier than you
          think
        </p>
      </div>
    </div>
  );
};
