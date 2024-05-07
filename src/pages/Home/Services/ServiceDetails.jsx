import { Link, useLoaderData } from "react-router-dom";
import banner from '../../../assets/images/checkout/checkout.png'
import FacilityCard from "./Facility/FacilityCard";
import { FaArrowRight } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import logo from '../../../assets/logo.svg';

const ServiceDetails = () => {
    const {_id, title, img, description, facility, price } = useLoaderData()
    return (
        <div className="mb-12">
            <div className="mb-32 bg-cover bg-center h-[300px]" style={{ backgroundImage: `url(${banner})` }}>
                <div className="w-full h-full bg-gradient-to-r from-[#151515FF] to-[#15151500]">
                    <h1 className="text-4xl font-bold text-white flex items-center h-full pl-24">Service Details</h1>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2">
                    <img className="w-full rounded-xl" src={img} alt="" />
                    <h1 className="text-3xl font-bold mt-12">{title}</h1>
                    <p className="mt-12">{description}</p>
                    <div className="grid grid-cols-2 mt-12 gap-6">
                        {facility.map((aFacility, index) => <FacilityCard
                            key={index}
                            aFacility={aFacility}
                        ></FacilityCard>)}
                    </div>

                </div>
                <div className="col-span-1">
                    <div className="bg-[#F3F3F3] p-8 rounded-xl">
                        <h3 className="text-3xl font-bold mb-4">Services</h3>
                        <button className="btn bg-white w-full flex justify-between text-xl hover:bg-[#FF3811] hover:text-white">Full Car Repair <FaArrowRight></FaArrowRight></button>
                        <button className="btn bg-white w-full flex justify-between text-xl hover:bg-[#FF3811] hover:text-white my-4">Engine Repair <FaArrowRight></FaArrowRight></button>
                        <button className="btn bg-white w-full flex justify-between text-xl hover:bg-[#FF3811] hover:text-white">Automatic Services <FaArrowRight></FaArrowRight></button>
                        <button className="btn bg-white w-full flex justify-between text-xl hover:bg-[#FF3811] hover:text-white my-4">Engine Oil Change <FaArrowRight></FaArrowRight></button>
                        <button className="btn bg-white w-full flex justify-between text-xl hover:bg-[#FF3811] hover:text-white">Battery Charge <FaArrowRight></FaArrowRight></button>
                    </div>
                    <div className="bg-[#151515] rounded-xl p-6 mt-8">
                        <h3 className="text-2xl font-bold text-white">Download</h3>
                        <div className="flex justify-between p-4">
                            <div className="flex items-center gap-6 text-white">
                                <div>
                                    <GrDocumentText className="text-xl"></GrDocumentText>
                                </div>
                                <div>
                                    <p>Our Brochure</p>
                                    <small>Download</small>
                                </div>

                            </div>
                            <div>
                                <button className="btn text-xl text-white border-[#FF3811] bg-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                            </div>
                        </div>
                        <div className="flex justify-between p-4">
                            <div className="flex items-center gap-6 text-white">
                                <div>
                                    <GrDocumentText className="text-xl"></GrDocumentText>
                                </div>
                                <div>
                                    <p>Company Details</p>
                                    <small>Download</small>
                                </div>

                            </div>
                            <div>
                                <button className="btn text-xl text-white border-[#FF3811] bg-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                            </div>
                        </div>

                    </div>
                    <div className="bg-[#151515] text-center rounded-xl p-6 mt-8 flex flex-col justify-center items-center">
                        <img className="h-24 w-24" src={logo} alt="" />
                        <p className="text-white">Need Help? We Are Here
                            <br />
                            To Help You</p>

                        <div className="relative my-6">
                            <div className="bg-white rounded-xl w-64 py-8">
                                <p className="text-xl font-bold"> <span className="text-[#FF3811]">Car Doctor</span> Special</p>
                                <small className="font-bold">Save up to <span className="text-[#FF3811]"> 60% off</span></small>

                            </div>
                            <div className="absolute bg-[#FF3811] rounded-lg py-2 px-6 ml-14 -bottom-4">
                                <p className="text-white font-bold">Get A Quote</p>

                            </div>
                        </div>

                    </div>
                    <h1 className="text-3xl font-bold my-6">Price ${price}</h1>
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn text-white bg-[#FF3811] text-xl font-bold w-full">Proceed Checkout</button>
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;