import HomePage from '@/app/page';
import NavbarClient from '@/components/NavbarClient';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useRouter } from 'next/navigation';
import userEvent from '@testing-library/user-event';


describe('En el componente navbar del cliente', () => {
  it('deberia de cargar', () => {
      render(<NavbarClient />)
      screen.getByText('TOP-MAN');
  });

  
      it('En el NavBarClient deberia haber un boton que lleve al registro', () => {
          render(<NavbarClient />)
          screen.getAllByRole('button', {name: 'REGISTRARSE'});

          
      });

})
/*
jest.mock('next/navigation', () => ({
  useRouter: jest.fn()
}));
useRouter.mockReturnValue({
  query: {},
  push: () => { }
})


// Función para simular la navegación a través de useRouter
  const mockPush = jest.fn();
  useRouter.mockImplementation(() => ({
    push: mockPush,
  }));
  
  test('navigates to /auth/login when ACCEDER button is clicked', () => {
    render(<NavbarClient />);
  
    // Busca el botón "ACCEDER" por su texto
    const accederButton = screen.getByText('ACCEDER');
  
    // Simula un clic en el botón "ACCEDER"
    act(() => {
      userEvent.click(accederButton);
    });
  
    // Verifica que useRouter haya sido llamado con la ruta correcta
    expect(mockPush).toHaveBeenCalledWith('/auth/login');
  });*/