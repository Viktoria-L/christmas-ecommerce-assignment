interface CountdownProps {
    content: number;
    text: string;
}

const CountDownDetail = ({content, text}: CountdownProps) => {
  return (
    <div className='flex flex-col justify-center border w-20 h-20 rounded-full'>
        <span>{content}</span>
        <span>{text}</span>
    </div>
  )
}

export default CountDownDetail