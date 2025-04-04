export const MessageThread = ({data}) => {
    return(
        <>
            {data.map(item=>
                { 
                    // return(<div key={item.messageID} className='message-thread-chat-other'><div>{item.userID}<br></br>{item.messageString}<br></br>{new Date(item.sendDate).toLocaleString()}</div></div>);
                    return(<div key={item.messageID} className='message-thread-chat-other'><div>{item.messageString}</div></div>);
                })   
            }
        </>
        );
   
}