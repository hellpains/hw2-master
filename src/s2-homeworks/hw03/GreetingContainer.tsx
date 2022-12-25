import React, {ChangeEvent, Dispatch, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: any, setError: Dispatch<string>, setName: Dispatch<string>, addUserCallback: Dispatch<string>) => {
    addUserCallback(name)

}

export const pureOnBlur = (name: string, setError: Dispatch<string>) => { // если имя пустое - показать ошибку
    if (name.trim().length === 0) {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: Dispatch<void>) => { // если нажата кнопка Enter - добавить
    if (e.key === "Enter") {
        addUser()
    }




}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = (
    {
        users,
        addUserCallback,
    }
) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        if (name.length !== 0) {
            pureAddUser(name, setError, setName, addUserCallback)
            setName('')
        }
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if(name.length===0){
            setError('Ошибка! Введите имя!')
        }else if(e.key === "Enter") {
            pureOnEnter(e, addUser)
        }
    }

    const totalUsers = users.length // need to fix
    // const lastUserName = users[users.length-1].name// need to fix
    const lastUserName = users.length ? users[users.length - 1].name : ''

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer




