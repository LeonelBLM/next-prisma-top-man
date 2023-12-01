import HomePage from '@/app/page';
import NavbarClient from '@/components/NavbarClient';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useRouter } from 'next/navigation';
import userEvent from '@testing-library/user-event';



describe('Carga de la pagina principal del cliente', () => {
    it('deberia de cargar', () => {
        render(<HomePage />)
        screen.getByText('Seguridad y eficiencia en cada kilometro');
    });

    
        it('En el NavBarClient deberia haber un boton que lleve al login', () => {
            render(<NavbarClient />)
            screen.getAllByRole('button', {name: 'ACCEDER'});

            
        });

})

