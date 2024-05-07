import PropTypes from 'prop-types'

const FacilityCard = ({aFacility}) => {
    const {name,details}=aFacility;
    return (
        <div className='border-t-2 border-red-600 rounded-xl bg-[#F3F3F3] p-6'>
            <h5 className='text-2xl font-bold'>{name}</h5>
            <p>{details}</p>
            
        </div>
    );
};

export default FacilityCard;
FacilityCard.propTypes={
    aFacility:PropTypes.object,
}