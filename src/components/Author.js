import '../styles/Author.css';
import quotes from '../quotes.json';

const Author = ({index, color, action}) => {
  return(
    <div className='author' style={{color: color}}>
      <p>{quotes[index].author}</p>
      <i onClick={action} className="fa-solid fa-circle-chevron-right"></i>
    </div>
  );
};

export default Author;