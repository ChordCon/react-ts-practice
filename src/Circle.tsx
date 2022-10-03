import styled from "styled-components";

interface ContainerP {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerP>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 10px solid ${(props) => props.borderColor};
`;

interface CircleP {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "Hello" }: CircleP) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
      {text}
    </Container>
  );
}

export default Circle;
/*
interface와 props

interface 
interface는 타입스크립트에게 오브젝트의 모양을 설명해주는 역할을 하고
덕에 실행후에 알수있는 에러를 실행하기 전에 미리 알수 있다.
옵셔널을 만들려면 borderColor?: string; 처럼 ?를 추가하면된다.

props
props 를 사용하는 방법은 위와 같다.

borderColor={borderColor ?? "white"}
옵셔널일때 ?? 를 통해서 기본값을 정해줘야 오류가 안나온다.
*/
