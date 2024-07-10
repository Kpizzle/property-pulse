import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';
import renderer from 'react-test-renderer';

describe('Footer', () => {
  it('should pass snapshot test', () => {
    const tree = renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
  });

//   it('should have introduction text', () => {
//     render(<Hero />);

//     const intro = screen.getByTestId('introduction');
//     expect(intro).toBeInTheDocument();
//     expect(intro).toHaveTextContent('Find The Perfect Rental');

//     const subHeading = screen.getByTestId('subheading');
//     expect(subHeading).toBeInTheDocument();
//     expect(subHeading).toHaveTextContent('Discover the perfect property that suits your needs.');
//   });

//   it('should contain all property types in dropdown', () => {
//     render(<Hero />);

//     const propertyTypeDropDown = screen.getByTestId('property-type');
//     expect(propertyTypeDropDown).toBeInTheDocument();
//   });
});
