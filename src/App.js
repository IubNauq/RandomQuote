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

    useEffect(() => {
        getQuote()
    }, [])

    function getQuote() {
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
        <div className="App" style={{backgroundColor: color}}>
            <div className="quote-box">
                <div className="quote"
                     style={{color: color}}>
                    <p>
                        <i className="fa fa-quote-left"></i> {quote}
                    </p>
                </div>
                <div className="author"
                     style={{color: color}}>
                    <p>
                        - {author}
                    </p>
                </div>
                <div className="buttons">

                    <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Build%20your%20own%20dreams%2C%20or%20someone%20else%20will%20hire%20you%20to%20build%20theirs.%22%20Farrah%20Gray"
                       className="button"
                       style={{backgroundColor: color}}
                       id="twitter"><i className="fa fa-twitter"></i></a>

                    <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Ann%20Landers&amp;content=It%20is%20not%20what%20you%20do%20for%20your%20children%2C%20but%20what%20you%20have%20taught%20them%20to%20do%20for%20themselves%2C%20that%20will%20make%20them%20successful%20human%20beings.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
                       className="button"
                       style={{backgroundColor: color}}
                       id="tumblr"><i className="fa fa-tumblr"></i></a>

                    <button className="new-quote"
                            style={{backgroundColor: color}}
                            onClick={getQuote}>New Quote
                    </button>

                </div>
            </div>
        </div>
    )
}

export default App;
