import { Form } from 'react-router';
import '../styles/style.css';

export const Session = () =>
{
    return (
    <div className='message-thread-page'>
        <h1 className='message-thread-title'>Session Page</h1>

        <div className='message-thread-table'>
            <div className='message-thread-chat-other'><div>Lorem.</div></div>
            <div className='message-thread-chat-self'><div>Lorem.</div></div>
            <div className='message-thread-chat-other'><div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, ducimus.</div></div>
            <div className='message-thread-chat-self'><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque veritatis error placeat repellendus mollitia in facilis, corporis voluptas nemo perspiciatis iure vel repudiandae numquam!</div></div>
            <div className='message-thread-chat-other'><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consectetur, rerum pariatur error ullam veniam veritatis minima quo quod tempore consequatur natus vero delectus nulla aliquam dolore laudantium quidem hic ut molestiae, quasi provident, facilis esse. Explicabo delectus repellendus, officiis error, id autem quo quasi ducimus beatae numquam deserunt facere.</div></div>
            <div className='message-thread-chat-self'><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad itaque veritatis error placeat repellendus mollitia in facilis, corporis voluptas nemo perspiciatis iure vel repudiandae numquam!</div></div>
        </div>

        <div className='message-thread-chat-input'>
            <input type="text" placeholder="Write your message here!"required/>
        </div>
    </div>
    )
}