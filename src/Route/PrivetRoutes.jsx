import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="text-center my-32"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if (user) {
        return children
    }
    return (<Navigate state={location.pathname} to='/login'></Navigate>
        
    );
};

export default PrivetRoutes;
PrivetRoutes.propTypes={
    children:PropTypes.node
}