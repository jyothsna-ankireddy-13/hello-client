import React from 'react';
import {Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './Clients/ClientCard.css';
const Payments = () => {
    return (
        < div className="payments">
            <div>
                <div className="paymentname-heading">
                <Typography variant="h2">Payments</Typography>
                </div>
                <div className="payment-main">
                    <Typography variant="h5">Revenue:XXXXXX(Last30days)</Typography>
                    <div className="payment-due">
                        <div>
                            <Typography>Clients with Overdue Payments:XX</Typography>
                            <Typography>Upcoming renewals(next 30days):XXX</Typography>
                        </div>
                        <div>
                            <Typography>Payments Overdue Amounts:XXX</Typography>   
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/addexpense" className="remind-all">
                        <FaIcons.FaPlus/> Add Expense
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Payments;
