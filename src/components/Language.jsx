import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({name, img, options}) => {
    const [showDesc, setShowDesc] = useState(false)
    console.log(name, img, options);
  return (
    
    <Container 
        onClick={() => setShowDesc(!showDesc)} 
        style={{ background: "peachpuff"}} 
        className="p-4 rounded-2">
            
            {!showDesc && (
      <Container>
        <Image src={img} width="70%"></Image>
        <h3 className="display-6">{name}</h3>
      </Container>  
            )}

            {showDesc && (
      <ul>
        {options.map((e) => {
            return <li className="h5 text-start">{e}</li>
            })}
      </ul>
            )}
    </Container>
  );
};

export default Language;