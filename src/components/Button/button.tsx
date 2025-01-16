import './styles.css';
type Props = {
    text: string;
}

export default function Button({text} : Props) {
  return (
    <div>
      <button className='container-start-button'>{text}</button>
    </div>
  )
}
