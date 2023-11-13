type ErrorProps = {
    text: string;
};

const ErrorMessage = ({text}: ErrorProps) => {
  return (
    <aside className='text-center mt-20'>
        <h2 className="font-dancing text-5xl">Oh no!</h2>
        <p>Something went wrong in the candyfactory!</p>
        <p>
        {text}
        </p>
        <img src="/images/christmas.svg" />
    </aside>

  )
}

export default ErrorMessage