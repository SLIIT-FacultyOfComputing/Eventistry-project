import styled from 'styled-components';

export const ManageStaffContainer = styled.div`
  
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    @media screen and (max-width: 768px){
        height: 1100px;
    }
    @media screen and (max-width: 400px){
        height: 1300px;
    }
`
export const ManageStaffWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 70px;
    padding: 0 50px;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ManageStaffCard = styled.div`
    background: #2F4F4F;
    display: flex;
    flex-direction: column; 
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 4px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;
    &:hover{ 
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ManageStaffIcon = styled.img`
    height: 200px;
    width: 200px;
    margin-bottom: 10px;
`

export const ManageStaffH1 = styled.h1`
    font-size: 2.5rem;
    color: #1e6262;
    margin-bottom: 32px;
    @media screen and (max-width: 400px) {
        font-size: 2rem;
    }
`

export const ManageStaffH2 = styled.h2`
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 10px;
`
