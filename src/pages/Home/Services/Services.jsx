import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-tau-jet.vercel.app/services')
            .then(res => res.json())
            .then(data =>{
                setServices(data)
            })
    }, [])

    return (
        <div className="my-12">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-[#FF3811]">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service=><ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;