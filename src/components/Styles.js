import styled from "styled-components"

export const Section1S = styled.div`
  max-width: 1400px;
  display: flex;
  margin: 10px auto;
  .items {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
  }
  .item {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: start;
    align-items: center;
    height: 500px;

    margin: 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 2px 0px;
    transition: box-shadow 0.2s ease-in-out 0s,
      -webkit-box-shadow 0.2s ease-in-out 0s;
    background: rgb(255, 255, 255);
    &:hover {
      transition: box-shadow 0.2s ease-in-out 0s,
        -webkit-box-shadow 0.2s ease-in-out 0s;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 16px 0px;
    }
    /*  box-shadow: 1px 10px 19px -12px #7d242b;
    border-left: 0;
    border-right: 0;
    border: 0;
    border-bottom: 1px solid #7d242b;
    border-top: 1px solid #7d242b1a;*/
    background: #fff;
    flex-direction: column;
  }
  .content {
    display: flex;
    min-height: 300px;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    text-decoration: none;
    background: #fff;
    box-sizing: border-box;
    padding: 0px 21px;
    color: #7d242b;
    transition: all 0.3s;
    border: 1px solid #7d242b;
    cursor: pointer;
    &:hover {
      transition: all 0.3s;
      background: #7d242b;
      color: #fff;
    }
  }
  .animacion {
    opacity: 0; /* La opacidad inicial del elemento es 0 */
    position: relative; /* Establece la posición como relativa */
    top: 50px; /* Mueve el elemento hacia abajo 50px para que pueda desplazarse hacia arriba */
    animation-name: fade-in-from-bottom; /* El nombre de la animación */
    animation-duration: 1s; /* La duración de la animación */
    animation-timing-function: ease-out; /* La función de temporización de la animación */
    animation-delay: 0s; /* El retraso antes de que comience la animación */
    animation-fill-mode: forwards; /* Establece el elemento en su estado final después de la animación */
  }
  @keyframes fade-in-from-bottom {
    from {
      opacity: 0; /* La opacidad inicial es 0 */
      top: 50px; /* Comienza desde 50px hacia abajo */
    }
    to {
      opacity: 1; /* La opacidad final es 1 */
      top: 0; /* Termina en la parte superior de la pantalla */
    }
  }
`
