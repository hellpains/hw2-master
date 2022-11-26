import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
type FriendMessageType = {
    message: MessageType
}

const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <div className={s.friendImageAndTime}>
                    <img id={'hw1-friend-avatar-' + props.message.id} src={props.message.user.avatar}/>
                    <div id={'hw1-friend-time-' + props.message.id} className={s.friendTime}>
                        <div>{props.message.message.time}</div>
                    </div>
                </div>
                <div className={s.friendText}>
                    <div id={'hw1-friend-name-' + props.message.id} className={s.friendName}>
                        <div>{props.message.user.name}</div>
                    </div>
                    <pre id={'hw1-friend-text-' + props.message.id} className={s.friendMessageText}>
                        <div>{props.message.message.text}</div>
                    </pre>
                    <div className={s.toggle}></div>
                </div>
            </div>

        </div>
    )
}

export default FriendMessage
