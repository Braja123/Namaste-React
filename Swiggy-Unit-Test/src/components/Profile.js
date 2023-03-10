import { useEffect, useState } from "react";

const Profile = ({name}) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Inside Profile function");
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  })
  return (
    <>
    <h2>Pofile Functional Component</h2>
    <h2>{name}</h2>
    <h3>count: {count}</h3>
    <button onClick={() => {setCount(1), setCount2(1)}}>Click Me</button>
    </>
  )
}

export default Profile;