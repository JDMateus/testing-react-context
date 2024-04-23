import { render } from '@testing-library/react';
import { PersonProvider } from '../context/PersonContext';

// Creating a custom render method
const renderWithContext = (ui, options) =>
  render(ui, { wrapper: PersonProvider, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
