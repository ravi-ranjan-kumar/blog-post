import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return <p className='text-sm mb-1 text-gray-400' dateTime={dateString}>{dateString ? format(date, 'LLLL d, yyyy') : null}</p>;
}