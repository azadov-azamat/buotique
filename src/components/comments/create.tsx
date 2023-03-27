import React, {useState} from 'react';
import classes from "../../styles/comment.module.scss"
import {useDispatch} from "react-redux";
import {pushComment} from "../../redux/reducers/variable";
import * as Yup from "yup"
import {useFormik} from "formik"
import * as Button from "../button/index"
import {AiFillStar} from "react-icons/all";
import commentImg from "../../assets/ico/comment.png"
import {CommentProps} from "../../interface/variable.interface";

function CreateComment(): JSX.Element {

    const dispatch = useDispatch()

    const [textLength, setTextLength] = useState(0)
    const [stars, setStars] = useState(0)
    const [checked, setChecked] = useState(false)

    const toggle = () => setChecked(!checked)

    return (
        <div className={classes.create}>
            <div className={classes.img}>
                <span>Опишите свое мнение <br/> о нас</span>
                <img src={commentImg} alt=""/>
            </div>
            <form className={classes['type-comment']}>
                <div className={classes.textarea}>
                    <textarea name="text" id="comment" maxLength={300} style={{resize: 'none'}}
                              placeholder={"Написать комментарий..."}
                              onChange={(e) => {
                                  setTextLength((e.target.value).length)
                                  // formik.setFieldValue("text", e.target.value)
                                  // if ((e.target.value).length === 0) formik.resetForm({values: ''})
                              }}/>
                    <span>{textLength}/300</span>
                </div>
                <div className={classes.name}>
                    <input className={"h-9 px-5 py-4"} type="text" name="name" placeholder={"Ваше имя"}/>
                    <label htmlFor="check">
                        <input
                            id={"check"}
                            type={"checkbox"}
                            onChange={toggle}
                            className="checked:bg-primary_dark rounded-xl bg-transparent w-8 border-none focus:shadow-none"
                        />
                        <span>согласие на обработку данных</span>
                    </label>
                    <div className={classes.stars}>
                        {[1, 2, 3, 4, 5].map((index) => <AiFillStar key={index}
                                                                    style={stars >= index ? {color: '#6C9392'} : {color: "#D9D9D9"}}
                                                                    onClick={() => setStars(index)}/>)}
                    </div>
                    <Button.Ripple
                        color={"disable"}
                        // disabled={!formik.isValid || !formik.dirty}
                        onClick={() => console.log('click...')} outline>Отправка</Button.Ripple>
                </div>
            </form>
        </div>
    );
}

export default CreateComment;

interface ValidateProps {
    name: string;
    text: string;
}