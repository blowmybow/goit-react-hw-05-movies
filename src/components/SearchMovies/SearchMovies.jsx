import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import { Form, Input, SearchButton, SearchIcon } from './SearchMovies.styled';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const SearchMovies = ({ onSubmit }) => {
  const [notification, setNotification] = useState({ type: '', message: '' });
  const formik = useFormik({
    initialValues: {
      value: '',
    },
    onSubmit: values => {
      if (!values) {
        setNotification({
          type: 'info',
          message: 'Please enter your search query!',
        });
        return;
      }
      onSubmit(values.value);
      formik.resetForm();
    },
  });
  useEffect(() => {
    if (notification) {
      function handleNotification() {
        const notificationType = notification.type;
        const notificationMessage = notification.message;

        if (notification.message === 'canceled') {
          return;
        }
        if (notificationType === 'info') {
          toast.info(notificationMessage);
          setNotification({ type: '', message: '' });
        }
        if (notificationType === 'error') {
          toast.error(notificationMessage);
          setNotification({ type: '', message: '' });
        }
      }
      handleNotification();
    }
  }, [notification]);
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
