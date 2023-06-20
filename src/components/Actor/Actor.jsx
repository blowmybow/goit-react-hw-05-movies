import PropTypes from 'prop-types';
import { Item, Image, Wrapper, InfoText, SpanText } from './Actor.styled';

const Actor = ({ actor: { name, profilePath, character } }) => {
  return (
    <Item>
      <Image src={profilePath} alt={name} />
      <Wrapper>
        <InfoText>
          <SpanText>Name:</SpanText> {name}
        </InfoText>
        <InfoText>
          <SpanText>Character:</SpanText> {character}
        </InfoText>
      </Wrapper>
    </Item>
  );
};

Actor.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePath: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default Actor;
