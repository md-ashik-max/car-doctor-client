import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <div className="card-actions flex justify-between items-center w-full text-[#FF3811]">
                    <p className='text-xl font-bold'>Price : ${price}</p>
                    <Link to={`/details/${_id}`}>
                        <button className="btn bg-transparent text-xl text-[#FF3811]"><FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
ServiceCard.propTypes = {
    service: PropTypes.object
}