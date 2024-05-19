import * as React from 'react';
import dayjs from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';

function isReserved(date, reservations) {
    return reservations.some(reservation => {
        const startDate = dayjs(reservation.start_date);
        const endDate = dayjs(reservation.end_date);

        return startDate.isSame(date) || endDate.isSame(date) || (startDate.isBefore(date) && endDate.isAfter(date));
    });
}

function ServerDay(props) {
    const { reservations, day, ...other } = props;
    const isReservedDay = isReserved(day, reservations);

    return (
        <PickersDay
            {...other}
            day={day}
            style={{ backgroundColor: isReservedDay ? 'red' : 'inherit' }}
        />
    );
}

export default function ReservationCalendar({ reservations }) {
    const requestAbortController = React.useRef(null);
    const [isLoading, setIsLoading] = React.useState(false);

    const fetchHighlightedDays = (date) => {
        const controller = new AbortController();
        setIsLoading(false);
        requestAbortController.current = controller;
    };

    React.useEffect(() => {
        fetchHighlightedDays(dayjs());
        return () => requestAbortController.current?.abort();
    }, []);

    const handleMonthChange = (date) => {
        if (requestAbortController.current) {
            requestAbortController.current.abort();
        }

        setIsLoading(true);
        fetchHighlightedDays(date);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                defaultValue={dayjs()}
                loading={isLoading}
                onMonthChange={handleMonthChange}
                renderLoading={() => <DayCalendarSkeleton />}
                slots={{
                    day: ServerDay,
                }}
                slotProps={{
                    day: {
                        reservations,
                    },
                }}
                style={{ backgroundColor: 'white', width: '500px'}}
            />
        </LocalizationProvider>
    );
}