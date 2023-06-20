import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { Form, Input, SearchButton, SearchIcon } from './SearchMovies.styled';

const SearchMovies = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      value: '',
    },
    onSubmit: values => {
      onSubmit(values.value);
      formik.resetForm();
    },
  });

  const { handleSubmit, handleChange, values } = formik;

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="value"
        onChange={handleChange}
        value={values.value}
        placeholder="Search movies"
      />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
