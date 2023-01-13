import PropTypes from 'prop-types';

export const GifItem = ({ title, url }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <h4>{title}</h4>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired,
};
