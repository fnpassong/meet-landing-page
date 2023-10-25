import Number from "./Number";
import footer from '../assets/desktop/image-footer.jpg';
import Btn from './Btn';
import '../styles/footer.scss';


export default function Footer() {

 const btn1 = {
    text : 'Download',
    txt1: 'v1.3'
  }  
    
    
  return (


    <footer className="footer">
        <Number digit = '02' />
        <div className="footer__img">
            
            <div className="footer__texto text-center">
                <div className="footer__title">
                    Experience more together
                </div>
                <div className="footer__paragraph">
                    <p>Stay connected with reliable HD meetings and unlimited one-on-one
                        and group video sessions.
                    </p>
                </div>
                
                <Btn txt = {btn1} />


            </div>
            
        </div>
    </footer>
  )
}
