import { useLoaderData } from "react-router-dom";
import banner from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Checkout = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { title, price, img } = service;
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const date = form.date.value;
        const email = user.email;
        const phone = form.phone.value;
        const bookedService = {title,email,date,phone,price, img};
        // console.log(bookedService)
        fetch('https://car-doctor-server-tau-jet.vercel.app/booking',{
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(bookedService)
        })
            .then(res=>res.json())
            .then(data=>{
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Booking Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                form.reset();
            })

    }
    return (
        <div>
            <div className="w-full">
                <img className="w-full" src={banner} alt="" />
            </div>
            <form onSubmit={handleBookService} className="card-body">
                <div className="flex gap-6 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Service</span>
                        </label>
                        <input type="text" placeholder="Service" defaultValue={title} name="service" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" placeholder="Date" name="date" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex gap-6 w-full">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="number" placeholder="Your Phone" name="phone" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn" type="submit" value="Order Confirm" />
                </div>
            </form>

        </div>
    );
};

export default Checkout;