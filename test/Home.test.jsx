import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '@/app/users/page';
import NavbarClient from '@/components/NavbarClient';

describe('HomePage', () => {
  it('should have "TOP-MAN" text', () => {
    render(<HomePage />);
    const myElem = screen.getByText('TOP-MAN');
    expect(myElem).toBeInTheDocument();
  });

  it('should contain the text "Transport Operations - Management"', () => {
    render(<HomePage />);
    const myElem = screen.getByText(/Transport Operations - Management/i);
    expect(myElem).toBeInTheDocument();
  });

  it('should have a heading with "Clientes"', () => {
    render(<HomePage />);
    const myElem = screen.getByRole('heading', {
      name: 'Clientes',
    });
    expect(myElem).toBeInTheDocument();
  });

});
//pruebas de eventos
describe('NavbarClient', () => {
    test('renders Contacto link', () => {
        render(<NavbarClient />);
        const contactoLink = screen.getByText(/Contacto/i);
        expect(contactoLink).toBeInTheDocument();
      });
      
      test('Contacto link points to the correct route', () => {
        render(<NavbarClient />);
        const contactoLink = screen.getByText(/Contacto/i);
        const linkElement = contactoLink.closest('a');
        expect(linkElement).toHaveAttribute('href', '/Forms');
      });

      test('renders Chat link', () => {
        render(<NavbarClient />);
        const ChatLink = screen.getByText(/Chat/i);
        expect(ChatLink).toBeInTheDocument();
      });
      
      test('Chat link points to the correct route', () => {
        render(<NavbarClient />);
        const ChatLink = screen.getByText(/Chat/i);
        const linkElement = ChatLink.closest('a');
        expect(linkElement).toHaveAttribute('href', '/Socket');
      });
      

      test('renders ACCEDER button', () => {
        render(<NavbarClient />);
        const accederButton = screen.getByText(/ACCEDER/i);
        expect(accederButton).toBeInTheDocument();
      });
      
      test('ACCEDER button links to the correct route', () => {
        render(<NavbarClient />);
        const accederButton = screen.getByText(/ACCEDER/i);
        userEvent.click(accederButton);
        const linkElement = accederButton.closest('a');
        expect(linkElement).toHaveAttribute('href', '/auth/login');
      });
      test('renders REGISTRARSE button', () => {
        render(<NavbarClient />);
        const registrarseButton = screen.getByText(/REGISTRARSE/i);
        expect(registrarseButton).toBeInTheDocument();
      });
      
      test('REGISTRARSE button links to the correct route', () => {
        render(<NavbarClient />);
        const registrarseButton = screen.getByText(/REGISTRARSE/i);
        userEvent.click(registrarseButton);
        const linkElement = registrarseButton.closest('a');
        expect(linkElement).toHaveAttribute('href', '/auth/register');
      });
});