import Layout from "@/components/Layout";
import { Divider } from "@nextui-org/react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Card = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen bg-[#331550] flex flex-wrap justify-center items-center py-8 md:py-0">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0 md:flex-row md:h-[110vh] w-full px-4 md:mt-0 mt-12">
            <div className="card flex flex-col items-center bg-[#54228377] w-full md:w-[23dvw] md:h-[80vh] h-auto p-10 transition duration-400 ease-in-out hover:bg-gradient-to-b from-[#5235bd77] to-[#633092ab] hover:border-b-2 hover:border-t-2 border-[#cc96ff] hover:translate-y-3 hover:shadow-2xl mb-8 md:mb-0">
              <div className="w-32 h-32 rounded-full bg- border-2 border-[#b675ff]">
                <img
                  src="img1.jpg"
                  className="object-cover w-full h-full rounded-full p-2"
                  alt=""
                />
              </div>
              <h1 className="text-2xl text-white font-medium mt-5">
                Jeremy <span className="text-2xl font-normal">Whatson</span>
              </h1>
              <p className="text-white font-mono mt-1">Graphic Designer</p>
              <p className="text-white text-sm mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus tempora ea deleniti quo eum ipsam consectetur quos
                fuga. Quibusdam, a!
              </p>
              <div className="flex justify-start items-center gap-3 mt-10">
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Facebook className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Instagram className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Twitter className="text-white" />
                </div>
              </div>
            </div>

            <Divider className="hidden md:block h-[80vh] w-[2px] bg-[#9a2eff]" />

            <div className="card flex flex-col items-center bg-[#54228377] w-full md:w-[23dvw] md:h-[80vh] h-auto p-10 transition duration-400 ease-in-out hover:bg-gradient-to-b from-[#5235bd77] to-[#633092ab] hover:border-b-2 hover:border-t-2 border-[#cc96ff] hover:translate-y-3 hover:shadow-2xl mb-8 md:mb-0">
              <div className="w-32 h-32 rounded-full bg- border-2 border-[#b675ff]">
                <img
                  src="img33.jpg"
                  className="object-cover w-full h-full rounded-full p-2"
                  alt=""
                />
              </div>
              <h1 className="text-2xl text-white font-medium mt-5">
                Emely <span className="text-2xl font-normal"> </span>
              </h1>
              <p className="text-white font-mono mt-1">Web Designer</p>
              <p className="text-white text-sm mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus tempora ea deleniti quo eum ipsam consectetur quos
                fuga. Quibusdam, a!
              </p>
              <div className="flex justify-start items-center gap-3 mt-10">
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Facebook className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Instagram className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Twitter className="text-white" />
                </div>
              </div>
            </div>

            <Divider className="hidden md:block h-[80vh] w-[2px] bg-[#6f2cad]" />

            <div className="card flex flex-col items-center bg-[#54228377] w-full md:w-[23dvw] md:h-[80vh] h-auto p-10 transition duration-400 ease-in-out hover:bg-gradient-to-b from-[#5235bd77] to-[#633092ab] hover:border-b-2 hover:border-t-2 border-[#cc96ff] hover:translate-y-3 hover:shadow-2xl mb-8 md:mb-0">
              <div className="w-32 h-32 rounded-full bg- border-2 border-[#b675ff]">
                <img
                  src="img2.jpg"
                  className="object-cover w-full h-full rounded-full p-2"
                  alt=""
                />
              </div>
              <h1 className="text-2xl text-white font-medium mt-5">
                Jerry <span className="text-2xl font-normal">Disuja</span>
              </h1>
              <p className="text-white font-mono mt-1">Ui/UX Designer</p>
              <p className="text-white text-sm mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus tempora ea deleniti quo eum ipsam consectetur quos
                fuga. Quibusdam, a!
              </p>
              <div className="flex justify-start items-center gap-3 mt-10">
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Facebook className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Instagram className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Twitter className="text-white" />
                </div>
              </div>
            </div>

            <Divider className="hidden md:block h-[80vh] w-[2px] bg-[#6f2cad]" />

            <div className="card flex flex-col items-center bg-[#54228377] w-full md:w-[23dvw] md:h-[80vh] h-auto p-10 transition duration-400 ease-in-out hover:bg-gradient-to-b from-[#5235bd77] to-[#633092ab] hover:border-b-2 hover:border-t-2 border-[#cc96ff] hover:translate-y-3 hover:shadow-2xl mb-8 md:mb-0">
              <div className="w-32 h-32 rounded-full bg- border-2 border-[#b675ff]">
                <img
                  src="img4.jpg"
                  className="object-cover w-full h-full rounded-full p-2"
                  alt=""
                />
              </div>
              <h1 className="text-2xl text-white font-medium mt-5">
                Amanda <span className="text-2xl font-normal">Carry</span>
              </h1>
              <p className="text-white font-mono mt-1">Digital Marketer</p>
              <p className="text-white text-sm mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus tempora ea deleniti quo eum ipsam consectetur quos
                fuga. Quibusdam, a!
              </p>
              <div className="flex justify-start items-center gap-3 mt-10">
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Facebook className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Instagram className="text-white" />
                </div>
                <div className="w-10 h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer ">
                  <Twitter className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Card;
