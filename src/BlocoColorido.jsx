
const divStyle = {
    color: 'white',
    backgroundColor: 'blue',
    width: '100%',
    height: '1000px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

function BlocoColorido(props) {
    return (
      <div>
        <div style={divStyle}>Background dos {props.name}</div>
      </div>
    );
  }
  
  export default BlocoColorido;