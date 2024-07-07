import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';
import renderer from 'react-test-renderer';

describe('Navbar', () => {
  it('should pass snapshot test', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have logo', () => {
    render(<Navbar />);

    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('should have notification icon', () => {
    render(<Navbar />);

    const notification = screen.getByTestId('notification');
    expect(notification).toBeInTheDocument();
  });
});
