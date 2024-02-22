import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    padding: 30px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
   `

const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    

`

const Navbar = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`

const Contact = styled.button`
    background-color: #6DFC56;
    width: 130px;
    height: 42px;
    border: 1px solid rgb(19, 57, 13);
    border-radius: 4px;
`

const Banner = styled.div`
    display: flex;
`

const Info = styled.div`
    width: 650px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 108px 0;
`

const Join = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 4px;  
    background: rgb(19, 57, 13);
    color: rgb(255, 255, 255);
    `


export {Header, Container, Navbar, Contact, Banner, Info, Join};