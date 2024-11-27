import Image from "next/image";
import LightBg1 from "@/../public/lightBg1.jpg"



export default function BgImgComp() {
    return <Image
    src={LightBg1}
    alt="Background"
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    layout="fill" // Ensures the image fills the container
    priority // Loads the image with high priority
  />
}