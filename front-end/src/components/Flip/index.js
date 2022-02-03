import { BsGithub } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import "./index.css";

function Flip({ photo, children, href, github }) {
  return (
    <div className='flip-container'>
      <div className='flip-card'>
        <div className='front'>
          <img src={photo} alt='' />
        </div>

        <div className='back'>
          <div className='demo-text'>{children}</div>
          <div className='flip-btn-wrap'>
            <button className='delete-btn'>
              <MdDeleteForever />
            </button>
            <button className='demo-btn'>
              <a href={href} target='_blank' rel='noreferrer'>
                Live Demo
              </a>
            </button>
            <a
              className='hub-btn'
              href={github}
              target='_blank'
              rel='noreferrer'
            >
              {<BsGithub />}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flip;
