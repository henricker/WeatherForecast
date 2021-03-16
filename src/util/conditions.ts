export default function conditions(condition: string) {

  switch(condition) {
    case 'storm':
      return {
        name: 'rainy-outline',
        color: '#1ec9ff'
      };
      break;
    case 'clear_day':
      return {
        name: 'partly-sunny-outline',
        color: '#ffb300'
      };
      break;
    case 'rain':
      return {
        name: 'rainy-outline',
        color: '#1ec9ff'
      };
      break;
    default:
      return {
        name: 'cloud-outline',
        color: '#1ec9ff'
      };
      break;
  }
}