import Layout from "@/components/Layout";
import { Button } from "@nextui-org/react";
import { ArrowBigRight, Twitter, Facebook, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
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
      <Layout>
        <div className="h-[110dvh] bg-[#331550] flex justify-center items-center overflow-y-hidden">
          <img
            src="bg3.png"
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
          <div className="absolute top-0 translate-y-48 text-white text-center">
            <div
              className="text-[12px] font-bold"
              style={{ letterSpacing: "5px" }}>
              CRAFTING BEAUTIFUL WEBSITES
            </div>
            <div
              className="text-6xl font-black mt-7 leading-[70px]"
              style={{ letterSpacing: "2px" }}>
              About Us
            </div>
            <div className="flex justify-center items-center h-10 mt-10">
              <Button className="h-full rounded-none bg-black/50 font-bold border-l-2 border-[#a749ff] text-white">
                Know More
              </Button>
              <div className="h-full w-16 bg-[#ea00ff] flex justify-center items-center text-white cursor-pointer">
                <ArrowBigRight />
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="min-h-screen bg-[#2d1041] text-white py-20 px-8 md:px-20 flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              We are a team of passionate designers and developers committed to
              building beautiful, functional, and user-friendly websites. Our
              journey began with a simple goal: to create digital experiences
              that leave a lasting impression. With years of experience and a
              dedication to excellence, we turn ideas into reality.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="min-h-screen bg-[#1c0832] text-white py-20 px-8 md:px-20 flex justify-center items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h2>
            <div className="md:flex block justify-center items-center md:space-y-0 space-y-3 gap-10 mt-10">
              <div className="flex flex-col justify-center items-center md:border-none border-1 border-[#e692ff] hover:bg-[#2d1041] w-[350px] h-[400px] delay-100 ease-in-out rounded-xl hover:shadow-xl cursor-pointer p-10">
                <h3 className="text-2xl font-semibold">Innovation</h3>
                <p className="mt-8">
                  We push the boundaries of design and technology to deliver
                  cutting-edge solutions that inspire and engage users.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center md:border-none border-1 border-[#e692ff] hover:bg-[#2d1041] w-[350px] h-[400px] delay-100 ease-in-out rounded-xl hover:shadow-xl cursor-pointer p-10">
                <h3 className="text-2xl font-semibold">Quality</h3>
                <p className="mt-8">
                  Every project we take on is a commitment to excellence, from
                  concept to final delivery. We take pride in our work.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center md:border-none border-1 border-[#e692ff] hover:bg-[#2d1041] w-[350px] h-[400px] delay-100 ease-in-out rounded-xl hover:shadow-xl cursor-pointer p-10">
                <h3 className="text-2xl font-semibold">Integrity</h3>
                <p className="mt-8">
                  Transparency, honesty, and trust are at the core of our
                  business. We believe in building long-lasting relationships
                  with our clients.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="h-[50vh] bg-[#331550] flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <Button className="h-12 rounded-none bg-[#ea00ff] font-bold text-white px-12">
            Contact Us
          </Button>
        </div>
      </Layout>

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

export default About;
