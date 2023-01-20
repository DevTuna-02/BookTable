import { render, screen,fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import Main from './components/Main';
test('Renders the BookingForm Next button', () => {
  render(<BookingForm />);
  const button = screen.getByText("Next");
  expect(button).toBeInTheDocument();
})
test('Behaviour of initializeTimes', () => {
  render(<Main />);
  const times = screen.getAllByText(/([01]?[0-9]|2[0-3]):[0-5][0-9]/);
  expect(times.length>=7).toBe(true);
})
test('Behaviour of updateTimes', () => {
  render(<Main />);
  const date= screen.getByLabelText("Select Date*");
  const todayTimes = screen.getAllByText(/([01]?[0-9]|2[0-3]):[0-5][0-9]/);
  fireEvent.change(date, {target: {value: '23'}});
  const updatedTimes = screen.getAllByText(/([01]?[0-9]|2[0-3]):[0-5][0-9]/);
  expect(todayTimes!=updatedTimes).toBe(true);
})
test('Submit button is disabled', () => {
  const handleSubmit=jest.fn();
  render(<Main><BookingForm submitForm={handleSubmit}/></Main>);
  const next= screen.getByText("Next");
  fireEvent.click(next);
  const submit=screen.getByText("Submit");
  fireEvent.click(submit);
  expect(handleSubmit).not.toHaveBeenCalled();
  expect(submit).toHaveAttribute("disabled");
})
test('Submit button is enabled', () => {
  render(<Main><BookingForm/></Main>);
  const date=screen.getByLabelText("Select Date*");
  fireEvent.change(date,{target:{value:"2023-08-08"}});
  const diner=screen.getByLabelText("Number of Diners*");
  fireEvent.change(diner,{target:{value:5}});
  const location=screen.getByLabelText("Outdoors");
  fireEvent.click(location);
  const next= screen.getByText("Next");
  fireEvent.click(next);
  const name=screen.getByLabelText("First Name*");
  fireEvent.change(name,{target:{value:"Jesus"}});
  const lname=screen.getByLabelText("Last Name*");
  fireEvent.change(lname,{target:{value:"Christ"}});
  const email=screen.getByLabelText("E-mail*");
  fireEvent.change(email,{target:{value:"gg@gl.hf"}});
  const submit=screen.getByText("Submit");
  expect(submit).not.toHaveAttribute("disabled");
  fireEvent.click(submit);
  const confirm=screen.getByText("You're all set!");
  expect(confirm).toBeInTheDocument();
})