import React, { useState, useRef } from 'react';
import Profilebar from '../components/Common/Profilebar';
import Sidebar1 from '../components/Common/Sidebar1';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../reducks/users/selectors';
import { updateProfile } from '../reducks/users/operations';
import uploadImage from '../assets/img/add-profile.png';

export default function Addprofile() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUser(selector);
    console.log('user', user);
    const userValues = { id: user.id, name: user.name, email: user.email, profile: user.profile };
    const [values, setValues] = useState(userValues);
    const [image, setImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [previewImage, setPreviewImage] = useState(null);

    const inputFile = useRef(null);
    const onButtonClick = () => {
        inputFile.current.click();
    };

    const inputImage = event => {
        const file = event.target.files[0];
        const objectUrl = URL.createObjectURL(file);
        setPreviewImage(objectUrl);
        setImage(file);
        setValues({ ...values, profile: null });
    };

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const updateProfileHandler = async () => {
        setIsLoading(true);
        dispatch(updateProfile({ ...values, profile: image }, values.id));
        setIsLoading(false);
    };
    console.log('values', values);

    return (
        <>
            <Sidebar1 />
            <ul class="container">
                <li class="menu">
                    <div class="login">
                        <div class="fields">
                            <div class="profile">
                                <input type="file" style={{ display: 'none' }} ref={inputFile} onChange={inputImage} />
                                <img
                                    onClick={onButtonClick}
                                    name="image"
                                    type="file"
                                    src={previewImage ? previewImage : values.profile ? values.profile : uploadImage}
                                    className={`upload-area`}
                                    alt="Upload"
                                />
                                <p class="addprofile">Add profile picture</p>
                            </div>
                            <p class="name">USERNAME</p>
                            <input
                                class="inputbox"
                                onChange={handleInputChange}
                                type="text"
                                name="name"
                                value={values.name}
                                placeholder="Enter your name"
                            />
                            <p class="name">EMAIL</p>
                            <input
                                class="inputbox"
                                onChange={handleInputChange}
                                type="email"
                                value={values.email}
                                name="email"
                                placeholder="Enter your name"
                            />

                            <button onClick={updateProfileHandler} type="button" class="createaccount">
                                Done
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            <Profilebar />
        </>
    );
}
