import { Chart } from '@antv/g2';

export function useBar() {
  onMounted(() => {
    const data = [
      { time: '10:10', call: 4, waiting: 2, people: 2 },
      { time: '10:15', call: 2, waiting: 6, people: 3 },
      { time: '10:20', call: 13, waiting: 2, people: 5 },
      { time: '10:25', call: 9, waiting: 9, people: 1 },
      { time: '10:30', call: 5, waiting: 2, people: 3 },
      { time: '10:35', call: 8, waiting: 2, people: 1 },
      { time: '10:40', call: 13, waiting: 1, people: 2 },
    ];

    const chart = new Chart({
      container: 'bar',
      autoFit: true,
    });

    chart.theme({ type: 'dark' });

    chart.data(data);

    chart.interval().encode('x', 'time').encode('y', 'waiting').axis('y', { titleFill: '#5B8FF9', title: 'Waiting' });

    chart
      .line()
      .encode('x', 'time')
      .encode('y', 'people')
      .encode('shape', 'smooth')
      .style('stroke', '#fdae6b')
      .style('lineWidth', 2)
      .scale('y', { independent: true })
      .axis('y', {
        position: 'right',
        grid: null,
        title: 'People',
        titleFill: '#fdae6b',
      });

    chart.render();
  });
}

export function useRose() {
  onMounted(() => {
    const chart = new Chart({
      container: 'rose',
      autoFit: true,
    });

    chart.theme({ type: 'dark' });

    chart.coordinate({ type: 'polar' });

    chart
      .interval()
      .data({
        // type: 'fetch',
        value: [
          { Month: 'Jan', Type: 'Other', Death: 324 },
          { Month: 'Jan', Type: 'Wounds', Death: 83 },
          { Month: 'Jan', Type: 'Disease', Death: 2761 },
          { Month: 'Feb', Type: 'Other', Death: 361 },
          { Month: 'Feb', Type: 'Wounds', Death: 42 },
          { Month: 'Feb', Type: 'Disease', Death: 2120 },
          { Month: 'Mar', Type: 'Other', Death: 172 },
          { Month: 'Mar', Type: 'Wounds', Death: 32 },
          { Month: 'Mar', Type: 'Disease', Death: 1205 },
          { Month: 'Apr', Type: 'Other', Death: 57 },
          { Month: 'Apr', Type: 'Wounds', Death: 48 },
          { Month: 'Apr', Type: 'Disease', Death: 477 },
          { Month: 'May', Type: 'Other', Death: 37 },
          { Month: 'May', Type: 'Wounds', Death: 49 },
          { Month: 'May', Type: 'Disease', Death: 508 },
          { Month: 'Jun', Type: 'Other', Death: 31 },
          { Month: 'Jun', Type: 'Wounds', Death: 209 },
          { Month: 'Jun', Type: 'Disease', Death: 802 },
          { Month: 'Jul', Type: 'Other', Death: 33 },
          { Month: 'Jul', Type: 'Wounds', Death: 134 },
          { Month: 'Jul', Type: 'Disease', Death: 382 },
          { Month: 'Aug', Type: 'Other', Death: 25 },
          { Month: 'Aug', Type: 'Wounds', Death: 164 },
          { Month: 'Aug', Type: 'Disease', Death: 483 },
          { Month: 'Sep', Type: 'Other', Death: 20 },
          { Month: 'Sep', Type: 'Wounds', Death: 276 },
          { Month: 'Sep', Type: 'Disease', Death: 189 },
          { Month: 'Oct', Type: 'Other', Death: 18 },
          { Month: 'Oct', Type: 'Wounds', Death: 53 },
          { Month: 'Oct', Type: 'Disease', Death: 128 },
          { Month: 'Nov', Type: 'Other', Death: 32 },
          { Month: 'Nov', Type: 'Wounds', Death: 33 },
          { Month: 'Nov', Type: 'Disease', Death: 178 },
          { Month: 'Dec', Type: 'Other', Death: 28 },
          { Month: 'Dec', Type: 'Wounds', Death: 18 },
          { Month: 'Dec', Type: 'Disease', Death: 91 },
        ],
      })
      .transform({ type: 'stackY' })
      .transform({ type: 'stackEnter', groupBy: ['color', 'x'], duration: 2000 })
      .encode('x', 'Month')
      .encode('y', 'Death')
      .encode('color', 'Type')
      .scale('y', {
        type: 'sqrt',
      })
      .animate('enterType', 'waveIn')
      .axis('y', false);

    chart.render();
  });
}
export default {};
