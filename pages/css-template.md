.hero{
    background-color: #1e0e0d;
    -webkit-box-shadow: inset 0px -7px 15px -8px #fffff0; 
    box-shadow: inset 0px -7px 15px -8px #fffff0;
}

.hero-img{
    width: 100%;
    height: 100%;
    background-image: url(../../assets/main-cake.jpeg);
    background-position: center;
    background-size: cover;
    display: flex;
    opacity: 0.6;   
}

.logo-pan{
    height: 35vw;
    width:100%;
    background-image: url(../../assets/vitrine3.jpeg);
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
}

.over-logo{
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.doce-pan{
    width:18%;
}

section{
    text-align: center;
}

h1, h2{
    font-family: 'Parisienne', cursive;
    margin: 0 auto;    
    font-weight: 300;
}

h1{
    font-size: 4rem;
}

hr{
    border: none;
    border-radius: 2px;
    height: 4px;
    margin: 0 auto;
}

.brown{background-color: #1e0e0d; color: white;}
.white{background-color: #fffff0; color: #1e0e0d;}

.titulo{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4.5rem 0px;
}

.titulo h1{
    margin-bottom: 1.5rem ;
}

.titulo p{
    font-size: 1.5rem;
    margin-bottom:1.5rem;
}

.titulo hr{
    width: 20%;
}

.logo-pan{
    height: 35vw;
    width:100%;
    background-image: url(../../assets/vitrine3.jpeg);
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
}

.over-logo{
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}

.doce-pan{
    width:18%;
}


@media(max-width:1050px){
    .hero{
        height: 23vw;
    }
    .titulo{
        padding:3.5rem 0px;
    }

    .titulo h1{
        font-size: 3rem;
        margin-bottom: 2rem;
    }

    .titulo p{
        font-size: 1.3rem;
        margin-bottom: 2.5rem;
    }

    .titulo hr{
        height: 4px;    
        border-radius: 2px;
        width: 30%;
    }

    .logo-pan{
        height: 60vw;
    }
    
    .doce-pan{
        width:30%;
    }
}


@media(max-width:800px){
    .hero{
        height: 30vw;
    }

    .titulo{
        padding:2.5rem 0px;
    }
    .titulo h1{
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    .titulo p{
        padding: 0 1rem;
        font-size: 1rem;
        margin-bottom: 1.5rem;
        max-width: 90%;
    }

    .titulo hr{
        height: 2px;    
        border-radius: 2px;
        width: 30%;
    }
}
@media(max-width:600px){
    .titulo{
        padding:2.5rem 0px;
    }
    .titulo h1{
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }
    .titulo p{
        padding: 0 1rem;
        font-size: 0.9rem;
        margin-bottom: 1.5rem;
        max-width: 90%;
    }

    .titulo hr{
        height: 2px;    
        border-radius: 2px;
        width: 30%;
    }

    .logo-pan{
        height: 60vw;
    }
    .doce-pan{
        width: 40vw;
    }

}


@media(max-width:300px){
    .titulo{
        padding:2rem 0px;
    }
    
    .titulo h1{
        font-size: 3rem;
        margin-bottom: 0.5rem;
    }

    .titulo p{
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .doce-pan{
        width:40%;
    }
}