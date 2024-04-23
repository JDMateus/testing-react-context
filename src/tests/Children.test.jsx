// Here we are importing a custom render method
import { render, screen } from '../test-utils/testing-library-utils';

// Other imports
import '@testing-library/jest-dom';
import { Children } from '../components/Children';

// import the context provider
import { PersonProvider } from '../context/PersonContext';

test('children renders name and age', () => {
  // render the component with a second option object to wrap the component
  render(<Children />, { wrapper: PersonProvider });

  // find the name and age elements
  const nameElement = screen.getByText('Juan');
  const ageElement = screen.getByText('36');

  // check that the name and age are in the document
  expect(nameElement).toBeInTheDocument();
  expect(ageElement).toBeInTheDocument();
});
