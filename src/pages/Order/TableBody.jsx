import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const TableBody = ({ order, bookingOrder, setBookingOrder }) => {
    const { _id, img, title, price, date, status } = order;
    const handleDelete = id => {
        // console.log(id, 'delete')
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-doctor-server-tau-jet.vercel.app/booking/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(() => {
                        // console.log(data)
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = bookingOrder.filter(order => order._id !== id);
                        setBookingOrder(remaining);
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });

    }
    const handleBookingUpdate = id => {
        fetch(`https://car-doctor-server-tau-jet.vercel.app/booking/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookingOrder.filter(booking => booking._id !== id);
                    const updatedOrder = bookingOrder.find(booking => booking._id === id);
                    updatedOrder.status = 'confirm';
                    const newOrder = [updatedOrder, ...remaining];
                    setBookingOrder(newOrder);

                }
            })
    }
    return (
        <tr>
            <th>
                {
                    status === 'confirm' ? '' : <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                }
            </th>
            <td>
                <img className="w-24 h-24" src={img} alt="" />
            </td>
            <td>
                <h1>{title}</h1>
            </td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ? <span>confirmed</span> : <button onClick={() => handleBookingUpdate(_id)} className=" btn text-[#29B170] border-2 border-[#29B170] p-2 rounded-lg">Please Confirm</button>
                }
            </th>
        </tr>

    );
};

export default TableBody;
TableBody.propTypes = {
    order: PropTypes.object,
    bookingOrder: PropTypes.array,
    setBookingOrder: PropTypes.func,
}