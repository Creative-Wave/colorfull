import { Button } from "@nextui-org/react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Head from "next/head";
import { useEffect, useState } from "react";

type TitlePropsType = {
  title: string;
};

const Display = ({ title }: TitlePropsType) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const image = new Image();
    image.src = "bg3.png";
    image.onload = handleImageLoad;

    return () => {
      image.onload = null;
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title} | page</title>
      </Head>
      <div className="h-[110dvh] bg-[#331550] bg-cover overflow-hidden flex justify- items-center">
        <div className="mx-16">
          <img
            src="bg1.png"
            className={`w-[60%] h-auto mt-12 absolute ${
              imageLoaded ? "animate-slideInCenter" : "opacity-0"
            }`}
            alt=""
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="h-full relative text-white flex flex-col justify-center">
            <div
              className="text-[12px] font-bold"
              style={{ letterSpacing: "5px" }}>
              MAKING BEAUTIFULL WEBSITES
            </div>
            <div
              className="md:text-6xl text-4xl font-black mt-7 md:leading-[70px] leading-[40px]"
              style={{ letterSpacing: "2px" }}>
              Creating a <br /> Beautifull Website
            </div>
            <div className="flex items-center h-10 mt-10">
              <Button className="h-full rounded-none font-bold bg-transparent border-l-2 border-[#a749ff] text-white">
                Visit Us
              </Button>
              <div className="h-full w-16 bg-[#ea00ff52] flex justify-center items-center text-white cursor-pointer">
                <ArrowBigRight />
              </div>
            </div>
            <p
              className="text-sm mt-5
            ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab{" "}
              <br />
              libero facere culpa tempore adipisci quis ea perferendis sintbr
              consectetur? Quo veritatis est omnis facere modi non aspernatur{" "}
              <br />
              veniam possimus animi!
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInCenter {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .animate-slideInCenter {
          animation: slideInCenter 1s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Display;
