import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import LoginPage from '@/app/auth/login/page';
import RegisterPage from '@/app/auth/register/page';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
  }));
  useRouter.mockReturnValue({
    query: {},
    push: () => {}
  })

  describe ('LoginPage -Rendering', ()=>{
    it('Render-Login Page', () => {
        useRouter.mockReturnValue({ query: {}})
        render(<LoginPage />)
        expect(screen.getByText('Iniciar Sesion')).toBeInTheDocument();
      });
      it('should have button with text ', ()=>{
        render(<LoginPage/>);
        expect(screen.getByText(/Email address/)).toBeInTheDocument();
        });
        it('should have button with text ', ()=>{
            render(<LoginPage/>);
            expect(screen.getByText(/Password/)).toBeInTheDocument();
        });

        describe('Evento',()=>{
            it('Should click event on "Entrar" button', () => {
                render(<LoginPage />);
                const entrarButton = screen.getByRole('button', { name: 'Entrar' });
                //fireEvent.click(entrarButton);

                userEvent.click(entrarButton);
    
        });
        it('should handle a click event Cancelar', () => {
            render(<LoginPage />);
            const CancelarButton = screen.getByRole('button', { name: 'Cancelar' });
            //fireEvent.click(CancelarButton);
            userEvent.click(CancelarButton);
        });


        
    });
});