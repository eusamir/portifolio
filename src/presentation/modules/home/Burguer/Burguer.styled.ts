'use client'

import styled from "styled-components";

interface Burgerprops{
    active: boolean
}
  

export const Container = styled.div<Burgerprops>`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-end;

    padding: 2rem;

    margin-top: 2rem;
    margin-right: 2rem;
    
    cursor: pointer;

    transition: all 1s;
`

export const BurguerActive = styled.div<Burgerprops>`
    display: flex;
    background-color: ${({ active }) => (active ? 'white' : '')};
    width: 300px;
    height: 380px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    margin-top: 3rem;
    margin-right: 2rem;
    opacity: ${({ active }) => (active ? '1' : '0')};;

    flex-direction: column;
    padding-top: 3rem;
    padding-left: 1.5rem;

    transform-origin: top right;

    border-radius: 2rem;

    transition: 0.3s ease-in-out;

`

export const FirstBar = styled.div<Burgerprops>`
    width: ${({ active }) => (active ? '2rem' : '3rem')};
    height: 0.3rem;
    position: absolute;
    background-color: ${({ active }) => (active ? '#FFD749' : 'white')};
    border-radius: 2rem;
    transform: ${({ active }) => (active ? 'rotate(45deg) translate(0.7rem, 0.4rem)' : '')};
    transition: ease-in-out 0.2s;
    z-index: 1;
`
export const SecondBar = styled.div<Burgerprops>`
    width: ${({ active }) => (active ? '2rem' : '2rem')};
    height: 0.30rem;
    position: absolute;
    background-color: ${({ active }) => (active ? '#FFD749' : 'white')};
    margin-top: 10px;
    border-radius: 2rem;
    transform: ${({ active }) => (active ? 'rotate(135deg) translate(-0.1rem, -0.3rem)' : '')};
    transition: ease-in-out 0.2s;
    z-index: 1;
`

export const Link = styled.a`
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.2rem;
    color: #FFD749;
    &:hover{
        opacity: 0.8;
    }
`

export const ContactMe = styled.h1`
    font-weight: 500;
    padding: 1rem;
    opacity: 0.3;
`

export const LinkContact = styled.a`
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.3rem;
    color: #FFD749;

    &:hover{
        opacity: 0.8;
    }
`