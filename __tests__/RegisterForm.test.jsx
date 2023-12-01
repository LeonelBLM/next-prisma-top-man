import RegisterPage from "@/app/auth/register/page";
import { render, screen } from "@testing-library/react";
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn()
}));
useRouter.mockReturnValue({
    query: {},
    push: () => { }
})

describe('Carga de la pagina principal del cliente', () => {
    it('deberia de cargar', () => {
        render(<RegisterPage />)
        screen.getByText('Registrarse');
    });


    it('deberia haber un boton que guarde', () => {
        render(<RegisterPage />)
        screen.getAllByRole('button', { name: 'Guardar' });


    });

    it('deberia haber un label en donde se indique Usuario', () => {
        render(<RegisterPage />)
        expect(screen.getByLabelText(/Usuario/)).toBeInTheDocument();
    })

    it('deberia haber un campo donde se guarde Usuario', () => {
        render(<RegisterPage />)
        expect(screen.getByPlaceholderText(/Usuario/)).toBeInTheDocument();
    })


})