import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration, ChartTypeRegistry } from 'chart.js/auto';

interface Props {
	chartType: string;
}

const ChartComponent: React.FC<Props> = ({ chartType }) => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const chartRef = useRef<Chart | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (canvas) {
			const ctx = canvas.getContext('2d');
			if (ctx) {
				const config: ChartConfiguration = {
					type: chartType as keyof ChartTypeRegistry,
					data: {
						labels: [
							'Feb',
							'Mar',
							'Apr',
							'May',
							'Jun',
							'Jul',
							'Aug',
							'Sept',
							'Oct',
						],
						datasets: [
							{
								label: 'Revenue',
								data: [100000, 80000, 60000, 40000, 20000, 1000],
								fill: true,
								borderColor: '#2aac8e',
								tension: 0.1,
							},
						],
					},
					options: {
						maintainAspectRatio: false,
						responsive: true,
						scales: {
							y: {
								beginAtZero: true,
							},
						},
					},
				};

				// Destroy the previous chart instance if it exists
				if (chartRef.current) {
					chartRef.current.destroy();
				}

				// Create a new chart instance
				chartRef.current = new Chart(ctx, config);
			}
		}

		// Cleanup function
		return () => {
			// Destroy the chart when the component unmounts
			if (chartRef.current) {
				chartRef.current.destroy();
			}
		};
	}, [chartType]);

	return (
		<div className='w-full h-full overflow-hidden'>
			<canvas ref={canvasRef} />
		</div>
	);
};

export default ChartComponent;
