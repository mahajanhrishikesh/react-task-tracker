import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({ title }) => {

    const onClick = () => {
        console.log("Click")
    }


    return (
    <div>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}/>
    </div>
  );
};

Header.defaultProps = {
    title:'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//Css in JS
//const headingStyle = {
//    color:'red',
//   backgroundColor:'black'
//}

export default Header;
