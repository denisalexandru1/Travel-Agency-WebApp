import React, { useEffect, useRef } from 'react';
import { Chart, LinearScale, BarController, CategoryScale, BarElement } from 'chart.js';
import dayjs from 'dayjs';

Chart.register(LinearScale, BarController, CategoryScale, BarElement);

export default function ReservationChart({ reservations }) {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            // If there is a chart instance, destroy it before creating a new one
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }

            // Initialize an object with all months of the current year
            const currentYear = dayjs().year();
            const allMonths = Array.from({ length: 12 }, (_, i) => `${currentYear}-${String(i + 1).padStart(2, '0')}`);
            const groupedReservations = allMonths.reduce((acc, month) => {
                acc[month] = 0;
                return acc;
            }, {});

            // Group reservations by month of creation date
            reservations.forEach(reservation => {
                const month = dayjs(reservation.start_date).format('YYYY-MM');
                if (groupedReservations.hasOwnProperty(month)) {
                    groupedReservations[month]++;
                }
            });

            const chartData = {
                labels: allMonths,
                datasets: [
                    {
                        label: 'Reservations',
                        data: allMonths.map(month => groupedReservations[month] || 0),
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderWidth: 1,
                    },
                ],
            };

            const options = {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            };

            // Create a new chart and store a reference to it
            chartInstanceRef.current = new Chart(chartRef.current, {
                type: 'bar',
                data: chartData,
                options: options,
            });
        }
    }, [reservations]);
    return (
        <canvas ref={chartRef} />
    );
}