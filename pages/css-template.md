.hero{
    background-color: #1e0e0d;
    -webkit-box-shadow: inset 0px -7px 15px -8px #fffff0; 
    box-shadow: inset 0px -7px 15px -8px #fffff0;
}

.hero-img{
    width: 100%;
    height: 100%;
    background-image: url(../assets/main-cake.jpeg);
    background-position: center;
    background-size: cover;
    display: flex;
    opacity: 0.6;   
}

@media(max-width:1050px){
    .hero{
        height: 23vw;
    }
}

@media(max-width:800px){
    .hero{
        height: 30vw;
    }
}