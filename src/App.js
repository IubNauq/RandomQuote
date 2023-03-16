import './App.css';
import React, {useEffect, useState} from "react";

let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];


function App() {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [color, setColor] = useState(colors[0])
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        fadeIn()
    }, [])


    function fadeIn() {
        setOpacity(0)
        setTimeout(() => getQuote(), 1000)
    }

    function getQuote() {
        setOpacity(1)

        let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

        fetch(url)
            .then(res => res.json())
            .then(out => {
                let dataQuotes = out.quotes
                let randomNum = Math.floor(Math.random() * dataQuotes.length)
                let randomQuote = dataQuotes[randomNum]
                setQuote(randomQuote.quote)
                setAuthor(randomQuote.author)

                let randomColor = Math.floor(Math.random() * colors.length)
                console.log(randomColor)
                setColor(colors[randomColor])


            })
            .catch(err => {
                throw err
            });
    }

    return (
        <div className="App"
             style={{backgroundColor: color}}>
            <div className="quote-box">
                <div className="quote"
                     style={{color: color, opacity: opacity}}>
                    <p>
                        <i className="fas fa-quote-left"></i> {quote}
                    </p>
                </div>
                <div className="author"
                     style={{color: color, opacity: opacity}}>
                    <p>
                        - {author}
                    </p>
                </div>
                <div className="buttons">

                    <a href={"https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent('https://iubnauq.github.io/RandomQuote/') + "&t=" + encodeURIComponent('"' + quote + '" ' + author)
                    }
                       className="button"
                       style={{backgroundColor: color}}
                       id="twitter"><i className="fab fa-facebook-f"></i></a>

                    <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent('"' + quote + '" ' + author)}
                       className="button"
                       style={{backgroundColor: color}}
                       id="twitter"><i className="fab fa-twitter"></i></a>

                    <a href={"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + encodeURIComponent('"' + quote + '" ' + author)}
                       className="button"
                       style={{backgroundColor: color}}
                       id="tumblr"><i className="fab fa-tumblr"></i></a>

                    <button className="new-quote"
                            style={{backgroundColor: color}}
                            onClick={fadeIn}>New Quote
                    </button>

                </div>
            </div>
        </div>
    )
}

export default App;
