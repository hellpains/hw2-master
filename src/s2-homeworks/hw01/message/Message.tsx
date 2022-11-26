import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}


// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>


                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        <div>{props.message.user.name}</div>
                    </div>
                    <div id={'hw1-text-' + props.message.id} className={s.messageText}>
                        <div>{props.message.message.text}</div>
                    </div>
                    <div className={s.toggle}></div>
                </div>



                <div className={s.imageAndTime}>
                    <img
                        id={'hw1-avatar-' + props.message.id}
                        src={props.message.user.avatar}
                    />
                    <div id={'hw1-time-' + props.message.id} className={s.time}>
                        <div>{props.message.message.time}</div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Message
