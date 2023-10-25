import '../styles/number.scss';

export default function Number({ digit }) {
  return (
    <div className="wholeNumber">
        <div className="wholeNumber__line"></div>
        <div className="wholeNumber__digit">{digit}</div>
    </div>
  )
}
