import PropTypes from 'prop-types';
import './UserCard.css';

function UserCard({ name = 'John Doe', age = 25 }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

UserCard.defaultProps = {
  name: 'John Doe',
  age: 25,
};

export default UserCard;
