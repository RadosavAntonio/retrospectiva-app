import style from 'styled-components'

export const ColorRed = style.div`
  color: red;
`

export const CacaMare = style.button`
  font-size: 50px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;

  position: relative;
  background-color: pink;
  border: none;
  // font-size: 28px;
  color: #FFFFFF;
  padding: 20px;
  width: 200px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  &:after {
    content: "";
    background: #90EE90;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px!important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s
  }
  &:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s
  }
`