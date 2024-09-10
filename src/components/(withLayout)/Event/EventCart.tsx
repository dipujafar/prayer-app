
import Image from "next/image";
import Link from "next/link";

const EventCart = ({ data }: any) => {

    return (
        <div className="flex flex-col gap-2 bg-white rounded-md ">
            <Link href={`/event/${1}`}>
            <div><Image className=" rounded-md" src={data?.image} width={600} height={600} alt="image" /></div>
            <div className=" p-4">
                <p className="font-bold text-lg mb-2 text-black">{data?.name}</p>
                <p className=" mb-2 text-black">By <span className=" text-primary ">{data?.date}</span></p>
                <p className="text-black">{data?.time}</p>
            </div>
            </Link>
        </div>
    );
};

export default EventCart;