import React from 'react'
import {useSelector} from 'react-redux'
import {Link } from 'react-router-dom'
import './admintoolbar.scss'
import {checkUserIsAdmin} from './../../Utils/index'

const mapState = ({ user }) => ({
    currentUser:user.currentUser
})

function AdminToolbar() {
    const {currentUser} = useSelector(mapState)
    const isAdmin = checkUserIsAdmin(currentUser);
    if(!isAdmin) return null;


    return (
        <div className="adminToolbar">
            <ul>    
                <li>
                    <Link to ="/admin">
                        Admin
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default AdminToolbar;