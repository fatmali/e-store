import React from 'react'
//import PropTypes from 'prop-types'
import './homepage.component.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = props => {
    return (
        <div className='homepage'>
            <Directory/>
        </div>
    )
}

HomePage.propTypes = {

}

export default HomePage;
