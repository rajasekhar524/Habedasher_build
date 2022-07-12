import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {checkUserIsAdmin} from '../Utils/index'


const mapState = ({user}) => ({
    currentUser:user.currentUser
});


function useAdminAuth() {
    const {currentUser} = useSelector(mapState)
    const history = useHistory();


    useEffect(() => {
        if(!checkUserIsAdmin(currentUser)){
            history.push('/register')
        }
    }, [currentUser]);

    return currentUser;
}

export default useAdminAuth;