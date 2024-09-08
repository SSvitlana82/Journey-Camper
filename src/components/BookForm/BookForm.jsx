import style from "./BookForm.module.css";
import { Button, DatePicker } from "antd";
import { Input } from "antd";
import { useState } from "react";
const { TextArea } = Input;
const BookForm = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {};
  const onChange = () => {};

  return (
    <div className={style.container}>
      <h3 className={style.title}>Book your campervan now</h3>
      <p className={style.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <div className={style.field}>
          <Input
            classNames={style.input}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className={errors ? style.error : ""}
            placeholder="Name"
            required
          />
          {errors && (
            <span className={style.errorMessage}>Name is required</span>
          )}
          <Input
            classNames={style.input}
            type="email"
            name="Email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className={errors ? style.error : ""}
            placeholder="Email"
            required
          />
          {errors && (
            <span className={style.errorMessage}>Email is required</span>
          )}
          <DatePicker
            classNames={style.input}
            onChange={onChange}
            placeholder="Booking date"
            required
            size="large"
          />
          <TextArea
            classNames={style.input}
            rows={4}
            placeholder="Comment"
            maxLength={6}
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <Button className={style.btn} type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default BookForm;
