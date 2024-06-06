import { useMemo, useState } from "react";
import "./App.css";
import { Card, cards } from "./cards";
import { Clues } from "./components/Clues";

const CARD_WIDTH = 100;

function App() {
  const [selectedCards, setSelectedCards] = useState<
    (Card & { completed: boolean })[]
  >([]);

  const [completedCards, setCompletedCards] = useState<
    (Card & { completed: true })[]
  >([]);

  const [lives, setLives] = useState(4);
  const [message, setMessage] = useState("");

  const cardsInRandomOrder = useMemo(
    () => cards.sort(() => Math.random() - 0.5),
    []
  );

  const checkIfGroupIsComplete = () => {
    const cardGroup = selectedCards.map((card) => card.groupId);
    if (selectedCards.length !== 4) return;
    else if (
      (cardGroup[0] === cardGroup[1] && cardGroup[1] === cardGroup[2]) ||
      (cardGroup[0] === cardGroup[1] && cardGroup[1] === cardGroup[3]) ||
      (cardGroup[0] === cardGroup[2] && cardGroup[2] === cardGroup[3]) ||
      (cardGroup[0] === cardGroup[2] && cardGroup[2] === cardGroup[3])
    ) {
      setMessage(`One away ...  You have ${lives - 1} tries left !`);
    }

    return (
      selectedCards[0].groupId === selectedCards[1].groupId &&
      selectedCards[0].groupId === selectedCards[2].groupId &&
      selectedCards[0].groupId === selectedCards[3].groupId
    );
  };

  console.log("lives=", lives);

  return (
    <>
      <div>
        <h1> Connections </h1>
        {/* <h4>
          Make 4 groups of 4 words such that the words in each group belong to a
          specific category. Each time you find a group, you will get a clue to
          help you open the cipher !
        </h4> */}
      </div>
      <p>{message}</p>

      <div className="container">
        {cardsInRandomOrder.map((card) => (
          <div
            key={card.id}
            style={{
              width: `${CARD_WIDTH}px`,
              color: "black",
              height: `${CARD_WIDTH}px`,
              border: selectedCards.some((x) => x.id === card.id)
                ? "4px solid lightblue"
                : "2px solid black",
              cursor: completedCards.some((x) => x.id === card.id)
                ? "not-allowed"
                : "pointer",
              backgroundColor: completedCards.some((x) => x.id === card.id)
                ? "black"
                : "white",
            }}
            onClick={() => {
              const cardIsCompleted = completedCards.some(
                (x) => x.id === card.id
              );
              if (
                cardIsCompleted ||
                (selectedCards.length === 4 &&
                  !selectedCards.some((x) => x.id === card.id))
              )
                return;

              const cardWasAlreadySelected = selectedCards.some(
                (x) => x.id === card.id
              );
              cardWasAlreadySelected
                ? setSelectedCards((selectedCards) =>
                    selectedCards.filter((x) => x.id !== card.id)
                  )
                : setSelectedCards((x) => [
                    ...x,
                    { ...card, completed: false },
                  ]);
            }}
          >
            <div>{card.front}</div>
          </div>
        ))}
      </div>
      <button
        style={{ marginTop: "30px" }}
        disabled={selectedCards.length !== 4 || !lives}
        onClick={() => {
          const groupIsComplete = checkIfGroupIsComplete();
          if (groupIsComplete) {
            const newCompletedCards = selectedCards.map((card) => ({
              ...card,
              completed: true,
            }));
            //@ts-expect-error TODO
            setCompletedCards((completedCards) => [
              ...completedCards,
              ...newCompletedCards,
            ]);
            setMessage(`Great job, you found a group !`);
            setSelectedCards([]);
          } else {
            setLives(lives - 1);
          }
        }}
      >
        Guess
      </button>
      <div style={{ marginTop: "30px" }}>
        <span>{"❤️".repeat(lives)}</span>
        <span>{"🖤".repeat(4 - lives)}</span>
      </div>
      <Clues amountToShow={completedCards.length / 4} />
    </>
  );
}

export default App;
