import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, TimeScale } from 'chart.js'; 
import 'chartjs-adapter-date-fns';

// Регистрация всех необходимых компонентов
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, TimeScale);

function StaticsCashIncome() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5134/CashIncome/AllItems');
                setData(response.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchData();
    }, []);

    // Проверяем, есть ли данные перед отображением диаграммы
    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    const chartData = {
        labels: data.map(item => item.transactionDate),
        datasets: [
            {
                label: 'Сумма поступления',
                data: data.map(item => item.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            },
        ],
    };

    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day'
                            }
                        },
                        y: {
                            beginAtZero: true
                        }
                    }
                }}
            />
        </div>
    );
}

export default StaticsCashIncome;