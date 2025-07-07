import { render } from '@testing-library/react';
import { UserContext } from './UserContext';
import { useStore } from './store';
import { vi } from 'vitest';

vi.mock('./store', () => ({
  useStore: vi.fn()
}));

const customRender = (ui, { userValue, storeState, ...options } = {}) => {
  useStore.mockImplementation((selector) => {
    const state = {
      count: 0,
      products: [],
      increment: vi.fn(),
      addProduct: vi.fn(),
      ...storeState
    };
    return selector(state);
  });

  const Wrapper = ({ children }) => (
    <UserContext.Provider value={userValue || []}>
      {children}
    </UserContext.Provider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from '@testing-library/react';
export { customRender as render };