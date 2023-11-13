type LoadingProps = {
    text: string;
}

const LoadingPage = ({text}: LoadingProps) => {
  return (
    <aside className="text-center mt-20">
    <h2 className="font-bold">Loading...</h2>
    <p className="">{text}</p>
    <img src="/images/Christmas-Tree-B.svg"/>
    </aside>
  )
}

export default LoadingPage;