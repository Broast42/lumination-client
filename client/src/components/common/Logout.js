import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/index';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const Logout = (props) => {

    let history = useHistory()

    return (
        <Button onClick={() => props.logout(history)} className="logout-btn">
            {props.isLoggingOut ? <LoadingOutlined/> : "Log Out"}
        </Button>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggingOut: state.isLoggingOut,
    }
}

export default connect(mapStateToProps, {logout})(Logout)