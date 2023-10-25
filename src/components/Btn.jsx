import '../styles/btn.scss';

export default function Btn({txt}) {

  const { text, txt1 } = txt;  

  return (
    <div className='boton'> {text} <span>{txt1}</span></div>
  )
}
