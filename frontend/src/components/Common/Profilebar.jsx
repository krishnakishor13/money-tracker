import React from 'react';
import profilepicture from '../../assets/img/profilepicture.png';
import notification from '../../assets/img/notificationicon.png';
import dots from '../../assets/img/3dots.png';

export default function Profilebar(props) {
    const { user } = props;

    return (
        <>
            <div class="profilebar">
                <img class="profilepicture" src={profilepicture} alt="" />
                <p class="profilemail">
                    abc <br />
                </p>
                <p class="profilemail">
                    abc@gmail.com
                    <br />
                </p>
                <div class="icons">
                    <img class="notificationicon" src={notification} alt="" />
                    <img class="3dots" src={dots} alt="" />
                </div>
            </div>
        </>
    );
}
