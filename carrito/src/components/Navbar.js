import { Component } from "react";

const styles = {
    navbar:{
        display: 'flex',
        flexDirection: 'row',
        alingItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        posicion: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0 1)'
    }
}

class Navbar extends Component{
    render(){
        return(
        <nav style={styles.navbar}>
            <p>Logo</p>
            <p>Carro</p>
        </nav>
        );
    }
}
export default Navbar;