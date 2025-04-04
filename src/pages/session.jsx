import { Form } from 'react-router';
import { useEffect,useState } from 'react';
import { MessageThread } from '../components/MessageThread';
import { BACKEND } from "../config";
import axios from 'axios';
import '../styles/style.css';

export const Session = () =>
{
    const [msgThread, setmsgThread] = useState([]);
    const [sessionData, setSessionData] = useState({
        userID: 0,
    });
    const [messageString, setMessageString] = useState("");

    // useEffect, update only on login
    useEffect(() => {

    }, []);

    // useEffect, update continuously
    useEffect(() => {
        getMessageThread();
    },[])


    async function writeNewMessage(messageToSend) {
        axios.post(`${BACKEND}/Message/write`, {
            MessageID: 0,
            UserID: sessionData.userID,
            SendDate: null,
            MessageString: messageToSend
        })
        .then(function (response) {

            console.log(response);

          })

          .catch(function (error) {

            console.log(error);

          });
    }



    // Get all messages
    async function getMessageThread() {
        try {
            const response = await axios.get(`${BACKEND}/Message/read`);
            
            console.log("Get Message Thread Response:", response.data);
            setmsgThread(response.data.messages);
        } catch (error) {
            console.error('Error getting message thread:', error);
        }
    }

    /*          HTML            */
    return (
    <div className='message-thread-page'>
        <h1 className='message-thread-title'>Session Page</h1>

        <div className='message-thread-table'>
            {msgThread.length>0? <MessageThread data={msgThread}/>:<div>No messages yet!</div>}
        </div>

        <div className='message-thread-chat-input'>
            <input type="text" placeholder="Write your message here!" value={messageString} onChange={(writtenText) => setMessageString(writtenText.target.value)} required/>
            <button type="submit" onClick={() => writeNewMessage(messageString)}></button>
        </div>
    </div>
    )
}