import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import Shop from './Shop.jsx';
import Navbar from '../components/Navbar';
import Card from '../components/Card';

describe("Shop", () => {
    const mockProducts = {
        id: 1,
        description: "A simple product blablabla",
        image: "https://picsum.photos/200/300",
        title: "Product",
        rating: {
            rate: 4.5, 
        },
        price: 99.99
    }

    it("renders Shop", () => {
        const { container } = render(
        <Shop/>, {
            userValue: mockProducts,
            storeState: { count: 0 }
        });

        expect(container).toMatchSnapshot();
    })

    
})