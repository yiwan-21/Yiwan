import { useEffect, useState } from "react"

const State = {
  typing: "typing",
  done: "done",
  delete: "delete",
}

const TYPING_INTERVAL = 200;
const PAUSE_TIME = 1000;
const DELETING_INTERVAL = 100;

export const useTypingText = (textArr) => {
  const [typingText, setTypingText] = useState("");
  const [typingState, setTypingState] = useState(State.typing);
  const [selectedText, setSelectedText] = useState(0);

  useEffect(() => {
    if (typingState === State.typing) {
      const nextTypingText = textArr[selectedText].slice(0, typingText.length + 1);

      if (nextTypingText === typingText) {
        setTypingState(State.done);
        return;
      }

      const timeout = setTimeout(() => {
        setTypingText(nextTypingText);
      }, TYPING_INTERVAL)

      return () => clearTimeout(timeout);
    }
    else if (typingState === State.delete) {
      if (!typingText) {
        setSelectedText((prevSelectedText) => {
          if (prevSelectedText === textArr.length - 1) {
            return 0;
          }
          return prevSelectedText + 1;
        })
        setTypingState(State.typing);
        return;
      }

      const nextRemainingText = textArr[selectedText].slice(0, typingText.length - 1);

      const timeout = setTimeout(() => {
        setTypingText(nextRemainingText);
      }, DELETING_INTERVAL)

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypingState(State.delete);
      }, PAUSE_TIME)

      return () => clearTimeout(timeout);
    }
  }, [textArr, typingText, selectedText, typingState])

  return typingText;
}