import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515FF] to-[#15151500]">
                    <div className="w-1/2 space-y-8 text-white pl-12">
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-6">
                            <button className="btn text-white bg-[#FF3811] border-[#FF3811]">Discover More</button>
                            <button className="btn hover:text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle hover:text-white hover:bg-[#FF3811]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle hover:text-white hover:bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515FF] to-[#15151500]">
                    <div className="w-1/2 space-y-8 text-white pl-12">
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-6">
                            <button className="btn text-white bg-[#FF3811] border-[#FF3811]">Discover More</button>
                            <button className="btn hover:text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle hover:text-white hover:bg-[#FF3811]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle hover:text-white hover:bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515FF] to-[#15151500]">
                    <div className="w-1/2 space-y-8 text-white pl-12">
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-6">
                            <button className="btn text-white bg-[#FF3811] border-[#FF3811]">Discover More</button>
                            <button className="btn hover:text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle hover:text-white hover:bg-[#FF3811]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle hover:text-white hover:bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515FF] to-[#15151500]">
                    <div className="w-1/2 space-y-8 text-white pl-12">
                        <h1 className="text-5xl">Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className="flex gap-6">
                            <button className="btn text-white bg-[#FF3811] border-[#FF3811]">Discover More</button>
                            <button className="btn hover:text-white hover:bg-[#FF3811]">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex gap-6 justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle hover:text-white hover:bg-[#FF3811]"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle hover:text-white hover:bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;