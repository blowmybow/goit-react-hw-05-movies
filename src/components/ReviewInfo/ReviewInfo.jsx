import PropTypes from 'prop-types';
import {
  ReviewInfoList,
  ReviewInfoItem,
  ReviewInfoTitle,
  ReviewInfoText,
} from './ReviewInfo.styled';

const ReviewInfo = ({ reviews }) => {
  return (
    <ReviewInfoList>
      {reviews.map(({ id, author, content }) => (
        <ReviewInfoItem key={id}>
          <ReviewInfoTitle>{author}</ReviewInfoTitle>
          <ReviewInfoText>{content}</ReviewInfoText>
        </ReviewInfoItem>
      ))}
    </ReviewInfoList>
  );
};

ReviewInfo.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default ReviewInfo;
