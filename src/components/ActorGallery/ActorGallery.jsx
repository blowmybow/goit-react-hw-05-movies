import PropTypes from 'prop-types';
import Actor from 'components/Actor/Actor';
import { List } from './ActorGallery.styled';

const ActorsGallery = ({ actors }) => {
  return (
    <List>
      {actors.map(actor => (
        <Actor key={actor.id} actor={actor} />
      ))}
    </List>
  );
};

ActorsGallery.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ActorsGallery;
