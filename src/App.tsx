"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to sultan's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Load Tenor embed script when "Yes" is pressed (once)
  useEffect(() => {
    if (yesPressed) {
      const existing = document.querySelector(
        'script[src="https://tenor.com/embed.js"]',
      );
      if (!existing) {
        const s = document.createElement("script");
        s.src = "https://tenor.com/embed.js";
        s.async = true;
        document.body.appendChild(s);
      }
    }
  }, [yesPressed]);

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! I love you chunku pie!!
          </div>
          <div className="w-full max-w-md mt-2">
            <div
              className="tenor-gif-embed"
              data-postid="16532097222650895810"
              data-share-method="host"
              data-aspect-ratio="1"
              data-width="70%"
            >
              <a href="https://tenor.com/view/cat-holding-a-rose-hand-emoji-charles-scarlet-wing-charles-cat-flower-cat-holding-a-rose-gif-16532097222650895810">
                Cat Holding A Rose Hand Emoji Charles Scarlet Wing Meme
              </a>
              from
              <a href="https://tenor.com/search/cat+holding+a+rose+hand+emoji+charles-memes">
                Cat Holding A Rose Hand Emoji Charles Memes
              </a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <img
              className="h-[200px]"
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
          </div>
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
