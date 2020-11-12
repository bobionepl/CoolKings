import styled from "styled-components";



export const NavStyle = styled.div`

 .navbar {
     background-color: white;
     border-bottom: 1px solid lightgray;
     position:fixed;
     z-index:421;
     width:100vw;
 }

.navbar-collapse{
    justify-content: space-between;

}

.navbar-brand {
    border-right: 1px solid lightgray;

    right:0px;
}

.search-bar{
    width:300px;
    border: none;
    box-shadow: none;

}


.navbar-brand, .navbar-nav, .nav-link {
    color: #bbb;
    font-size: 12px;
    font-weight: bold;

&:hover {
     color:white;
 }
}

.nav-elem:hover {
    border-bottom: 2px solid gray;
    margin-bottom: -2px;
}

.navbar-hamburger{
    border-color:transparent;
    outline: none;
}

`;

