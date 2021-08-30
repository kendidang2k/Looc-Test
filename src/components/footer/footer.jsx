import React from 'react';
import { AiOutlineCopyrightCircle ,AiOutlineTwitter, AiFillYoutube} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import './footer.css'


const Footer = () => {
    return (
        <footer>
            <div className="cover-footer">
                <div className="contact-information">
                    <p className="name">이터 보호가 <span>가 중요하다고</span><span> 도약에도</span></p>
                    <p className="address"> 책을 | 만들: 기 위해 | 뒤섞였습니: 356-00-00000</p>
                    <p className="address"> 표준: test0101@vidionly.co.kr | FAX: 070-0000-0000</p>
                    <p className="address">프린터가 활자 갤리선을173 가</p>
                </div>
                <div className="social-media">
                    <a className="twitter" href="/">
                        <p className="icon"><AiOutlineTwitter></AiOutlineTwitter></p>
                    </a>
                    <a className="instagram" href="/">
                        <p className="icon"><FiInstagram></FiInstagram></p>
                    </a>
                    <a className="facebook" href="/">
                        <p className="icon"><FaFacebookF></FaFacebookF></p>
                    </a>
                    <a className="youtube" href="/">
                        <p className="icon"><AiFillYoutube></AiFillYoutube></p>
                    </a>
                </div>
                <p className="copyright">Copyright <AiOutlineCopyrightCircle></AiOutlineCopyrightCircle> VIDIONLY All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;