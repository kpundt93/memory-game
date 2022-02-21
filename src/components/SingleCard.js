import './SingleCard.css'

export default function SingleCard({ card, handleChoice }) {

  const handleClick = () => {
    handleChoice(card);
  }

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="Card front" />
        <img className="back" src="/img/cover.png" onClick={ handleClick } alt="Card back" />
      </div>
    </div>
  )
}