import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError();
  const {status, statusText} = err;
  return (
    <>
      <h1>Opps</h1>
      <h2>Something Went wrong</h2>
      <h2>{status + ":" + statusText}</h2>
    </>
  )
}

export default Error