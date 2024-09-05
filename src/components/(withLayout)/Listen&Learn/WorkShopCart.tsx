import Image from "next/image";
import playBtn from "@/assets/listen&Learn/playBtn.png";
import Link from "next/link";

const WorkShopCart = ({ data }: any) => {
  console.log(data);
  return (
    <div className=" gap-2 items-center bg-white rounded-md p-2">
      <div className="relative ">
        <Image
          src={data?.image}
          width={300}
          height={300}
          alt="image"
          className=""
        />
        <div className="bg-black absolute w-1/2 h-full right-0 top-0 bg-opacity-60">
          <div className="flex flex-col h-full justify-center items-center gap-y-2">
            <h1 className="font-bold text-[#F0BE1B]">{data?.total_video}</h1>
            <Image src={playBtn} alt="playBtn"></Image>
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-lg mb-2">{data?.name}</p>
        <p className=" mb-2">
          By <span className=" text-primary ">{data?.skill}</span>
        </p>
        <p>{data?.total}</p>
      </div>
      <Link href={`/listen-and-learn/${data?._id}`} >
      <button className=" w-full bg-primary p-1 text-white mt-2">Watch</button>
      </Link>
    </div>
  );
};

export default WorkShopCart;
