"use client"
import SingleUserInfo from "@/components/(withLayout)/OrderList/SingleOrder/SingleUserInfo";
import masterCardImg from "@/assets/order/masterCardLogo.png"
import Image from "next/image";
import SingleOrderDetails from "@/components/(withLayout)/OrderList/SingleOrder/SingleOrderDetails";
const SingleOrder = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <>
            <div>
                <SingleUserInfo handleChange={handleChange}></SingleUserInfo>
            </div>
            <div className=" mt-10">
                {/* <Image src={paymentInfo} width={1200} height={200} alt="payment info"/> */}
                <div className="bg-[#EFE6EF] p-4 rounded">
                    <h1 className="text-xl font-bold text-[#232321] mb-4">Payment Info</h1>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-x-3 items-center ">
                            <Image src={masterCardImg} alt="masterCardImg"></Image>
                            <p>Master Card **** **** 6557</p>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <p>Business name: Shristi Singh</p>
                            <p>Phone: +91 904 231 1212</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <SingleOrderDetails></SingleOrderDetails>
            </div>
        </>
    );
};

export default SingleOrder;