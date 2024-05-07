import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import TableBody from "./TableBody";


const Order = () => {
    const { user } = useContext(AuthContext);
    const url = `https://car-doctor-server-tau-jet.vercel.app/booking/${user?.email}`
    const [bookingOrder, setBookingOrder] = useState([]);
    useEffect(() => {
        fetch(url,{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                setBookingOrder(data)
            })
    }, [url])
    return (
        <div className="mb-12">
            <h1 className="text-5xl font-bold text-center my-12">Order : {bookingOrder.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookingOrder.map(order => <TableBody
                                key={order._id}
                                order={order}
                                bookingOrder={bookingOrder}
                                setBookingOrder={setBookingOrder}></TableBody>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default Order;