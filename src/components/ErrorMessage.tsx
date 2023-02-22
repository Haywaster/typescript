import React from 'react';

interface ErrorProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorProps) => {
  return <p className='text-center font-bold text-red-500'>{error}</p>;
};

export default ErrorMessage;
