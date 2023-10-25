import '../styles/group.scss';
import Btn from './Btn';



export default function Group() {

    const btn1 = {
        text: 'Download',
        txt1: 'v1.3'
    }

    const btn2 = {
        text: 'What it is?',
                
    }

  return (
        <div className="group">

            <h1 className="group__title text-center">
                Group Chat for Everyone
            </h1>

            <p className="group__paragraph text-center">
                Meet makes it easy to connect with others face-to-face virtually and
                collaborate across any device
            </p>

            <div className="group__btn">
                <Btn txt = {btn1} />
                <Btn txt = {btn2} />
            </div>

        </div>
     )
}
