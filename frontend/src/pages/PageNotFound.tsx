import BlinkingTree from "../components/BlinkingTree"


const PageNotFound = () => {
  return (
    <div className="flex flex-col text-center justify-center">
        <div className="mt-12">
            <h1 className="font-bold text-3xl">404</h1>
        </div>
        <div className="mt-4">
            <p>Page not found.</p>
        </div>
      <BlinkingTree />
    </div>
  )
}

export default PageNotFound