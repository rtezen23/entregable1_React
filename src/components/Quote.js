import '../styles/Quote.css';
import quotes from '../quotes.json';

const Quote = ({index, color}) => {
    return (
      <div className='quote' style={{color: color}}>
        <i className="fa-solid fa-quote-left"></i>
        <p>{quotes[index].quote}</p>
      </div>
    );
};

export default Quote;