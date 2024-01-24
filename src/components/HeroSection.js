import Button from "./Button";
import Card from "./Card";

export default function HeroSection() {
  return (
    <section className="h-fit md:h-[750px] min-h-0 w-full bg-[url('/option_2.jpg')] bg-cover border-2 border-black relative flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col my-10 md:my-2">
      <p className=" uppercase text-[32px] md:text-[40px] font-[250] max-w-[80%] md:max-w-[792px] text-center text-gray-700 ">
        Handmade soap and skincare products made with nature’s finest
        ingredients
      </p>

      <Button />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4  bg-[#9AAF8F] relative md:absolute bottom-0 border-yellow-400 py-4">
        
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
       
     
    </section>
  );
}
