import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
  border: 4px solid;
  width: 40rem;
`;

const Card = (props) => {
  const { link, imagen } = props.datos;

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <Img
            src={imagen}
            alt="Miniatura Video"
            style={{ borderColor: props.colorPrimario }}
          />
        </a>
      </div>
    </>
  );
};

export default Card;
