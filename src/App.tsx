import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="user name"
        ></input>
        <button>Log in</button>
      </form>
      <div>hello {value}</div>
    </div>
  );
}

export default App;
/*
(e: React.FormEvent<HTMLInputElement>)
타입스트립트에게 e가 어떤 것인지 설명
위에서는 form내부의
HTMLInputElement의 이벤트라는 것을 설명


e.preventDefault()
form에서는 엔터를 누르면 리프레시가 되는데 이를 방지해준다.
*/
