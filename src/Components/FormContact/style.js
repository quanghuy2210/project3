import styled from "styled-components";
import {device} from '../../contants'
 
export const FormContactWrapper = styled.div`
   padding: 20px;
   margin: 60px 120px ;
   background: #FFFFFF;
   box-shadow: 0px 15px 35px rgba(34, 79, 94, 0.06);
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media ${device.tablet}{
      padding: 10px;
      margin: 20px;
   }
   .over-para{
    text-align: center;
   }
   .dash{
    margin: 30px 0 50px;
    width: 198px;
    border: 1px dashed #8FA5AE;
   }
   form{
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       .over-input{
          width: calc((100% - 30px) / 2);
          @media ${device.tablet}{
            width: 100%;
         }
        }
        .comment{
            width: 100%;
            .over-input{
                margin: 0;
                input{
                    display: none;
                }
            }
            textarea{
                padding: 8px;
                width: 100%;
                height: 140px;
                background: #F9FBFC;
                border-radius: 5px;
                font-weight: 400;
                font-size: 1.1rem;
                line-height: 19px;
                letter-spacing: 0.01em;
                color: #8FA5AE;
                border: 1px solid #F9FBFC;
            }
        }
        .over-input:last-child{
          padding-top: 25px;
          width: 100%;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          label{
            width: 100%;
            margin:0 0 0 7px;
            font-weight: 400;
             font-size: 13px;
            line-height: 19px;
             letter-spacing: 0.01em;
             color: #4F5A5E;
          }
          input{
            width: fit-content;
          }
        }
   }
   
`